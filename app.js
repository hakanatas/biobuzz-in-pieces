document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const polygonContainer = document.getElementById('polygon-container');
    const morphWrapper = document.getElementById('morph-wrapper');
    const navDotsContainer = document.getElementById('nav-dots');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const soundToggle = document.getElementById('sound-toggle');
    const soundIconOn = document.getElementById('sound-icon-on');
    const soundIconOff = document.getElementById('sound-icon-off');
    const particleContainer = document.getElementById('particle-container');
    
    // Intro Elements
    const introOverlay = document.getElementById('intro-overlay');
    const introLoading = document.getElementById('intro-loading');
    const introNarratives = document.getElementById('intro-narratives');
    const narrativePhrases = document.querySelectorAll('.narrative-phrase');
    const introCard = document.getElementById('intro-card');
    const startBtn = document.getElementById('start-btn');
    const skipIntro = document.getElementById('skip-intro');
    const skipBtn = document.getElementById('skip-btn');
    const timelineBar = document.getElementById('timeline-bar');

    // Info Panel Elements
    const infoNum = document.getElementById('info-num');
    const infoTitle = document.getElementById('info-title');
    const infoDesc = document.getElementById('info-desc');
    const infoRelation = document.getElementById('info-relation');
    
    // Modal Elements
    const aboutDialog = document.getElementById('about-dialog');
    const aboutGameBtn = document.getElementById('about-game-btn');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    let currentShapeIndex = 0;
    const totalShapes = SHAPES.length;
    const piecesCount = 30;
    let pieceElements = [];
    let isHovered = false;

    // Web Audio Synthesizer State
    let audioCtx = null;
    let masterGain = null;
    let ambientDroneOsc = null;
    let arpIntervalId = null;
    let isMuted = true;

    // Intro Scheduling Timeouts list
    let introTimeouts = [];
    let introStartTime = 0;
    let timelineAnimId = null;
    const totalIntroDuration = 10800; // 10.8s total timeline

    // 1. Initialize HTML Elements
    function init() {
        // Create 30 piece elements
        for (let i = 0; i < piecesCount; i++) {
            const piece = document.createElement('div');
            piece.className = 'piece';
            piece.id = `piece-${i}`;
            polygonContainer.appendChild(piece);
            pieceElements.push(piece);
        }

        // Create navigation dots for 8 shapes
        for (let i = 0; i < totalShapes; i++) {
            const dot = document.createElement('div');
            dot.className = `dot ${i === 0 ? 'active' : ''}`;
            dot.setAttribute('data-index', i);
            dot.addEventListener('click', () => {
                if (body.classList.contains('in-intro')) return;
                goToShape(i);
            });
            navDotsContainer.appendChild(dot);
        }

        setupEventListeners();
        startIntroSequence();
    }

    // 2. Intro Sequence Controller
    function startIntroSequence() {
        introStartTime = Date.now();
        updateIntroTimeline();

        // Initial loading state: set coordinates to collapsed points near center
        setCollapsedState();

        // Phase 1: End Loading, Start Narratives (after 2s)
        scheduleIntroTimeout(() => {
            introLoading.classList.add('hidden');
            introNarratives.classList.remove('hidden');
            showNarrativePhrase(0);
            // Morph to Honeybee in background
            morphToIntroShape(0); 
        }, 2000);

        // Phase 2: Narrative 1 (after 4.2s)
        scheduleIntroTimeout(() => {
            showNarrativePhrase(1);
            // Morph to Canopy Leaf in background
            morphToIntroShape(4); // Leaf is index 4
        }, 4200);

        // Phase 3: Narrative 2 (after 6.4s)
        scheduleIntroTimeout(() => {
            showNarrativePhrase(2);
            // Morph to FTC Robot in background
            morphToIntroShape(2); // Robot is index 2
        }, 6400);

        // Phase 4: Narrative 3 (after 8.6s)
        scheduleIntroTimeout(() => {
            showNarrativePhrase(3);
            // Morph to Chameleon in background
            morphToIntroShape(6); // Chameleon is index 6
        }, 8600);

        // Phase 5: Show Title Card (after 10.8s)
        scheduleIntroTimeout(() => {
            introNarratives.classList.add('hidden');
            skipIntro.classList.add('hidden');
            introCard.classList.remove('hidden');
            setTimeout(() => introCard.classList.add('active'), 50);
            // Morph to Honeycomb in background
            morphToIntroShape(7); // Honeycomb is index 7
        }, 10800);
    }

    function scheduleIntroTimeout(callback, delay) {
        const id = setTimeout(callback, delay);
        introTimeouts.push(id);
    }

    function updateIntroTimeline() {
        if (!body.classList.contains('in-intro')) return;
        const elapsed = Date.now() - introStartTime;
        const progress = Math.min(100, (elapsed / totalIntroDuration) * 100);
        timelineBar.style.width = `${progress}%`;
        
        if (elapsed < totalIntroDuration) {
            timelineAnimId = requestAnimationFrame(updateIntroTimeline);
        }
    }

    function showNarrativePhrase(index) {
        narrativePhrases.forEach((p, idx) => {
            if (idx === index) {
                p.classList.add('active');
            } else {
                p.classList.remove('active');
            }
        });
    }

    function setCollapsedState() {
        pieceElements.forEach((piece) => {
            // Collapse pieces to slight organic jitter around (50, 50)
            const jitterX = 50 + (Math.random() * 6 - 3);
            const jitterY = 50 + (Math.random() * 6 - 3);
            piece.style.clipPath = `polygon(${jitterX}% ${jitterY}%, ${jitterX}% ${jitterY}%, ${jitterX}% ${jitterY}%)`;
            piece.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
        });
    }

    function morphToIntroShape(index) {
        const shape = SHAPES[index];
        pieceElements.forEach((piece, idx) => {
            const points = shape.triangles[idx];
            piece.style.clipPath = `polygon(${points[0][0]}% ${points[0][1]}%, ${points[1][0]}% ${points[1][1]}%, ${points[2][0]}% ${points[2][1]}%)`;
            piece.style.backgroundColor = shape.colors[idx];
        });
        document.documentElement.style.setProperty('--active-accent', shape.accentColor);
        document.documentElement.style.setProperty('--active-accent-rgb', shape.accentColorRgb);
    }

    function skipOrEndIntro() {
        // Clear intro scheduling
        introTimeouts.forEach(clearTimeout);
        if (timelineAnimId) cancelAnimationFrame(timelineAnimId);
        
        // Play cinematic synth riser/swell
        playIntroSwell();

        // Fade out overlay screen
        introOverlay.classList.add('fade-out');
        body.classList.remove('in-intro');

        // Initial setup for the interactive experience
        currentShapeIndex = 0; // Starts with Honeybee
        updateShape();

        // Unmute audio on user interaction to comply with autoplay policy
        isMuted = false;
        initAudio();
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        soundToggle.classList.add('playing');
        soundIconOn.classList.remove('hidden');
        soundIconOff.classList.add('hidden');
    }

    // 3. Main Site Render Updates
    function updateShape() {
        const shape = SHAPES[currentShapeIndex];
        
        document.documentElement.style.setProperty('--active-accent', shape.accentColor);
        document.documentElement.style.setProperty('--active-accent-rgb', shape.accentColorRgb);

        pieceElements.forEach((piece, index) => {
            const points = shape.triangles[index];
            const color = shape.colors[index];
            const pathString = `polygon(${points[0][0]}% ${points[0][1]}%, ${points[1][0]}% ${points[1][1]}%, ${points[2][0]}% ${points[2][1]}%)`;
            
            piece.style.clipPath = pathString;
            piece.style.backgroundColor = color;
            
            if (isHovered) {
                applyExplosion();
            } else {
                piece.style.transform = 'translate(0, 0) scale(1)';
            }
        });

        // Update Text Info
        infoNum.textContent = `0${currentShapeIndex + 1} / 0${totalShapes}`;
        infoTitle.textContent = shape.name;
        infoDesc.textContent = shape.desc;
        infoRelation.textContent = shape.relation;

        // Update Dots
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === currentShapeIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        playMorphSound();
    }

    function goToShape(index) {
        if (index === currentShapeIndex) return;
        currentShapeIndex = (index + totalShapes) % totalShapes;
        updateShape();
    }

    // 4. Hover Explosion Math
    function applyExplosion() {
        const shape = SHAPES[currentShapeIndex];
        
        pieceElements.forEach((piece, index) => {
            const points = shape.triangles[index];
            const cx = (points[0][0] + points[1][0] + points[2][0]) / 3;
            const cy = (points[0][1] + points[1][1] + points[2][1]) / 3;
            
            const vx = cx - 50;
            const vy = cy - 50;
            const dist = Math.sqrt(vx * vx + vy * vy) || 1;
            
            const explodeFactor = 8; // displacement percentage
            const tx = (vx / dist) * explodeFactor;
            const ty = (vy / dist) * explodeFactor;
            
            piece.style.transform = `translate(${tx}%, ${ty}%) scale(1.03)`;
        });
    }

    function resetExplosion() {
        pieceElements.forEach(piece => {
            piece.style.transform = 'translate(0, 0) scale(1)';
        });
    }

    // 5. Spawning Pollen Particles
    function spawnPollen(x, y) {
        const particleCount = 10;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'pollen-particle';
            particle.style.backgroundColor = SHAPES[currentShapeIndex].accentColor;
            
            if (Math.random() > 0.6) {
                particle.style.backgroundColor = 'var(--accent-gold)';
            }
            
            particleContainer.appendChild(particle);
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.opacity = '0.95';
            particle.style.transform = 'scale(1.2)';

            const angle = Math.random() * Math.PI * 2;
            const distance = 40 + Math.random() * 70;
            const targetX = Math.cos(angle) * distance;
            const targetY = Math.sin(angle) * distance;

            particle.animate([
                { transform: 'translate(0, 0) scale(1.2)', opacity: 0.95 },
                { transform: `translate(${targetX}px, ${targetY}px) scale(0.1)`, opacity: 0 }
            ], {
                duration: 700 + Math.random() * 400,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => {
                particle.remove();
            };
        }
    }

    // 6. Web Audio Synthesizer Sefe (Intro Swell & Background Drone)
    function initAudio() {
        if (audioCtx) return;
        
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        masterGain = audioCtx.createGain();
        masterGain.gain.value = 0.15;
        masterGain.connect(audioCtx.destination);
        
        startAmbientDrone();
        startAmbientArpeggiator();
    }

    // Ambient forest humming / hive buzz (Warm, calm, buzz-free C3 + G3 sine waves)
    function startAmbientDrone() {
        ambientDroneOsc = audioCtx.createOscillator();
        const droneOsc2 = audioCtx.createOscillator();
        const droneFilter = audioCtx.createBiquadFilter();
        const droneGain = audioCtx.createGain();

        // Use pure sine waves for zero buzzing or speaker rattling
        ambientDroneOsc.type = 'sine';
        ambientDroneOsc.frequency.value = 130.81; // C3 (Warm, clean tone)

        droneOsc2.type = 'sine';
        droneOsc2.frequency.value = 196.00; // G3 (Soothing fifth harmony)
        
        droneFilter.type = 'lowpass';
        droneFilter.frequency.value = 250;

        // Reduce volume to be a very subtle, soft background presence
        droneGain.gain.value = 0.04;

        ambientDroneOsc.connect(droneFilter);
        droneOsc2.connect(droneFilter);
        droneFilter.connect(droneGain);
        droneGain.connect(masterGain);

        ambientDroneOsc.start();
        droneOsc2.start();
    }

    // Relaxing procedural pentatonic bell notes
    function startAmbientArpeggiator() {
        // Pentatonic scale of A-major: A3, B3, C#4, E4, F#4
        const notes = [220.00, 246.94, 277.18, 329.63, 369.99, 440.00];
        
        arpIntervalId = setInterval(() => {
            if (isMuted || Math.random() > 0.4) return;

            const noteFreq = notes[Math.floor(Math.random() * notes.length)];
            playBellNote(noteFreq);
        }, 1200);
    }

    function playBellNote(frequency) {
        if (!audioCtx || audioCtx.state === 'suspended') return;

        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        osc.type = 'sine';
        osc.frequency.value = frequency;

        const now = audioCtx.currentTime;
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.04, now + 0.15);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

        osc.connect(gainNode);
        gainNode.connect(masterGain);

        osc.start(now);
        osc.stop(now + 2.6);
    }

    // Cinematic intro riser / swell sound
    function playIntroSwell() {
        const tempCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
        const tempMaster = tempCtx.createGain();
        tempMaster.connect(tempCtx.destination);
        tempMaster.gain.setValueAtTime(0.2, tempCtx.currentTime);

        const osc = tempCtx.createOscillator();
        const osc2 = tempCtx.createOscillator();
        const filter = tempCtx.createBiquadFilter();
        const gain = tempCtx.createGain();

        osc.type = 'sawtooth';
        osc2.type = 'triangle';

        const now = tempCtx.currentTime;
        
        osc.frequency.setValueAtTime(80, now);
        osc.frequency.exponentialRampToValueAtTime(320, now + 1.2);
        
        osc2.frequency.setValueAtTime(160, now);
        osc2.frequency.exponentialRampToValueAtTime(640, now + 1.2);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(100, now);
        filter.frequency.exponentialRampToValueAtTime(1500, now + 1.0);
        filter.frequency.exponentialRampToValueAtTime(200, now + 1.5);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.18, now + 0.5);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

        osc.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(tempMaster);

        osc.start(now);
        osc2.start(now);
        osc.stop(now + 1.7);
        osc2.stop(now + 1.7);
    }

    // Morph swept note SFX
    function playMorphSound() {
        if (isMuted || !audioCtx || audioCtx.state === 'suspended') return;

        const osc = audioCtx.createOscillator();
        const osc2 = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();

        osc.type = 'triangle';
        osc2.type = 'sine';
        
        const now = audioCtx.currentTime;
        
        osc.frequency.setValueAtTime(130, now);
        osc.frequency.exponentialRampToValueAtTime(520, now + 0.8);
        
        osc2.frequency.setValueAtTime(260, now);
        osc2.frequency.exponentialRampToValueAtTime(1040, now + 0.8);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, now);
        filter.frequency.exponentialRampToValueAtTime(200, now + 0.8);

        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.08, now + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 1.0);

        osc.connect(filter);
        osc2.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(masterGain);

        osc.start(now);
        osc2.start(now);
        
        osc.stop(now + 1.1);
        osc2.stop(now + 1.1);
    }

    function toggleAudio() {
        if (isMuted) {
            initAudio();
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            masterGain.gain.setValueAtTime(0, audioCtx.currentTime);
            masterGain.gain.linearRampToValueAtTime(0.15, audioCtx.currentTime + 0.5);
            
            isMuted = false;
            soundToggle.classList.add('playing');
            soundIconOn.classList.remove('hidden');
            soundIconOff.classList.add('hidden');
        } else {
            if (audioCtx) {
                masterGain.gain.setValueAtTime(masterGain.gain.value, audioCtx.currentTime);
                masterGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.3);
                
                setTimeout(() => {
                    if (isMuted && audioCtx) {
                        audioCtx.suspend();
                    }
                }, 350);
            }
            
            isMuted = true;
            soundToggle.classList.remove('playing');
            soundIconOn.classList.add('hidden');
            soundIconOff.classList.remove('hidden');
        }
    }

    // 7. Event Listeners Setup
    function setupEventListeners() {
        // Skip and Start experience buttons
        skipBtn.addEventListener('click', skipOrEndIntro);
        startBtn.addEventListener('click', skipOrEndIntro);

        // Arrows navigation
        prevBtn.addEventListener('click', () => {
            if (body.classList.contains('in-intro')) return;
            goToShape(currentShapeIndex - 1);
        });
        nextBtn.addEventListener('click', () => {
            if (body.classList.contains('in-intro')) return;
            goToShape(currentShapeIndex + 1);
        });

        // Key bindings
        document.addEventListener('keydown', (e) => {
            if (body.classList.contains('in-intro')) {
                if (e.key === ' ' || e.key === 'Enter' || e.key === 'Escape') {
                    skipOrEndIntro();
                }
                return;
            }
            if (e.key === 'ArrowLeft') {
                goToShape(currentShapeIndex - 1);
            } else if (e.key === 'ArrowRight') {
                goToShape(currentShapeIndex + 1);
            }
        });

        // Mouse Wheel Scroll-Driven Transitions (debounced to 800ms)
        let lastScrollTime = 0;
        const scrollCooldown = 800; // ms

        window.addEventListener('wheel', (e) => {
            if (body.classList.contains('in-intro')) return;
            
            const now = Date.now();
            if (now - lastScrollTime < scrollCooldown) return;
            
            if (e.deltaY > 0) {
                // Scroll down: next shape
                goToShape(currentShapeIndex + 1);
                lastScrollTime = now;
            } else if (e.deltaY < 0) {
                // Scroll up: prev shape
                goToShape(currentShapeIndex - 1);
                lastScrollTime = now;
            }
        }, { passive: true });

        // Touch Swipe Navigation for Mobile Devices
        let touchStartX = 0;
        let touchEndX = 0;

        window.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        window.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            if (body.classList.contains('in-intro')) return;
            
            const swipeThreshold = 50; // minimum swipe distance in pixels
            const diff = touchEndX - touchStartX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff < 0) {
                    // Swipe Left: Next Shape
                    goToShape(currentShapeIndex + 1);
                } else {
                    // Swipe Right: Previous Shape
                    goToShape(currentShapeIndex - 1);
                }
            }
        }

        // Hover morph effect
        morphWrapper.addEventListener('mouseenter', () => {
            if (body.classList.contains('in-intro')) return;
            isHovered = true;
            applyExplosion();
        });

        morphWrapper.addEventListener('mousemove', (e) => {
            if (isHovered && !body.classList.contains('in-intro')) {
                applyExplosion();
            }
        });

        morphWrapper.addEventListener('mouseleave', () => {
            isHovered = false;
            resetExplosion();
        });

        // Spawning pollen
        morphWrapper.addEventListener('click', (e) => {
            if (body.classList.contains('in-intro')) return;
            
            spawnPollen(e.clientX, e.clientY);
            
            if (!isMuted && audioCtx) {
                playBellNote(660.00 + Math.random() * 200);
            }
        });

        // Audio controls
        soundToggle.addEventListener('click', toggleAudio);

        // Dialog Modal Controls
        aboutGameBtn.addEventListener('click', () => {
            aboutDialog.showModal();
        });

        modalCloseBtn.addEventListener('click', () => {
            aboutDialog.close();
        });

        aboutDialog.addEventListener('click', (e) => {
            if (e.target === aboutDialog) {
                aboutDialog.close();
            }
        });
    }

    // Initialize application
    init();
});
