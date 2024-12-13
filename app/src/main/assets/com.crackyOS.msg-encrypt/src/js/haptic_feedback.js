page_40b39ebc = './src/js/haptic_feedback.js';

/*cycle patterns*/
function p_c_s() { //patternCycleStart
    navigator.vibrate(10);
    sessionStorage.setItem("haptic_feedback.pattern", "p_c_d");
}

function p_c_t() { //patternCycleTry
    navigator.vibrate(60); setTimeout(() => {navigator.vibrate(40);},100);
}

function p_c_d() { //patternCycleDone
    navigator.vibrate(10);setTimeout(() => {navigator.vibrate(20);setTimeout(() => {navigator.vibrate(20);setTimeout(() => {navigator.vibrate(20);setTimeout(() => {navigator.vibrate(10);setTimeout(() => {navigator.vibrate(40);setTimeout(() => {navigator.vibrate(10);setTimeout(() => {navigator.vibrate(10);}, 10);}, 10);}, 10);}, 10);}, 10);}, 10);}, 10);
}

function p_c_e() {
    navigator.vibrate(100);setTimeout(() => {navigator.vibrate(200);}, 100);
}

function p_c_c() {
    navigator.vibrate(45);
}

function p_l() { //pattern lock !NOTWORKING
    for (let i = 0; i < 10; i++) {
        let vibrationDuration = i % 2 === 0 ? 15 : 20;
        setTimeout(() => {
            navigator.vibrate(vibrationDuration);
        }, i * 30);
    }
}

function p_r() { //pattern reset
    for (let i = 0; i < 20; i++) {
        let vibrationDuration = i % 2 === 0 ? 15 : 20;
        setTimeout(() => {
            navigator.vibrate(vibrationDuration);
        }, i * 30);
    }
}

function p_oc() { //pattern onclick
    navigator.vibrate(15);
}

function p_rtf() {
    if (sessionStorage.getItem("runtime") === "false") {
        for (let i = 0; i < 4; i++) {
            let vibrationDuration = i % 2 === 0 ? 15 : 20;
            setTimeout(() => {
                navigator.vibrate(vibrationDuration);
            }, i * 30);
        }
    }
}


function pattern_cycleDone() {
    //pattern when cycle is done
    //log(page_40b39ebc, `playPattern(cycleDone)`);
    navigator.vibrate(8);setTimeout(() => {navigator.vibrate(8);setTimeout(() => {navigator.vibrate(8);}, 8);}, 8);
}

function pattern_playCheckBox() {
    //pattern when checkbox is checked
    //log(page_40b39ebc, `playPattern(playCheckBox)`);
    navigator.vibrate(5);setTimeout(() => {navigator.vibrate(5);setTimeout(() => {navigator.vibrate(5);setTimeout(() => {navigator.vibrate(5);setTimeout(() => {navigator.vibrate(5);}, 5);}, 5);}, 5);}, 5);
}

function pattern_clear() {
    //pattern index is cleared
    //log(page_40b39ebc, `playPattern(clear)`);
    navigator.vibrate(10);setTimeout(() => {navigator.vibrate(30);setTimeout(() => {navigator.vibrate(10);}, 10);}, 10);
}

function pattern_error() {
    //pattern when error occurs
    //log(page_40b39ebc, `playPattern(error)`);
    navigator.vibrate(10);setTimeout(() => {navigator.vibrate(20);setTimeout(() => {navigator.vibrate(20);setTimeout(() => {navigator.vibrate(20);setTimeout(() => {navigator.vibrate(10);setTimeout(() => {navigator.vibrate(10);setTimeout(() => {navigator.vibrate(30);setTimeout(() => {navigator.vibrate(10);}, 10);}, 10);}, 10);}, 10);}, 10);}, 10);}, 500);
}

function vibrate(method, value) {
    if (method === 'time') {
        const time_ms = value;
        if (localStorage.getItem("hf") === "true") {
            if (navigator.vibrate) {
                //log(page_40b39ebc, `vibrate(${method}, ${time_ms})`);
                navigator.vibrate(time_ms);
            } else {
                log(page_40b39ebc, `vibrate(${method}, ${time_ms})`, "not supported!");
            }
        }
    } else if (method === 'pattern') {
        //verschiedene Vibrationsmuster
        const playPattern = value;
        if (localStorage.getItem("hf") === "true") {
            if (navigator.vibrate) {
                //log(page_40b39ebc, `vibrate(${method}, ${playPattern})`);

                if (playPattern === 'cycleDone') {
                    pattern_cycleDone();
                } else if (playPattern === 'trigCB') {
                    pattern_playCheckBox();
                } else if (playPattern === 'clear') {
                    pattern_clear();
                } else if (playPattern === 'error') {
                    pattern_error();
                } else if (playPattern === 'p_c_s') {
                    p_c_s();
                } else if (playPattern === 'p_c_t') {
                    p_c_t();
                } else if (playPattern === 'p_c_e') {
                    p_c_e();
                } else if (playPattern === 'p_c_e') {
                    p_c_e();
                } else if (playPattern === 'p_c_c') {
                    p_c_c();
                } else if (playPattern === 'p_l') {
                    p_l();
                } else if (playPattern === 'p_r') {
                    p_r();
                } else if (playPattern === 'p_oc') {
                    p_oc();
                } else if (playPattern === 'p_rtf') {
                    p_rtf();
                }
            } else {
                //log(page_40b39ebc, `vibrate(${method}, ${value})`, "not supported!");
            }
        }
    }
}



/*
    ############################
    #CHATGPT ERSTELLTE PATTERNS#
    ############################
*/
function pattern_01() {
    //01 pattern for successful operation
    //log(page_40b39ebc, `playPattern(success)`);
    navigator.vibrate(50);setTimeout(() => {navigator.vibrate(100);setTimeout(() => {navigator.vibrate(50);}, 50);}, 50);
}

function pattern_02() {
    //02 pattern when a warning is triggered
    //log(page_40b39ebc, `playPattern(warning)`);
    navigator.vibrate(20);setTimeout(() => {navigator.vibrate(20);setTimeout(() => {navigator.vibrate(20);}, 20);}, 20);
}

function pattern_03() {
    //03 pattern when a new message is received
    //log(page_40b39ebc, `playPattern(messageReceived)`);
    navigator.vibrate(100);setTimeout(() => {navigator.vibrate(200);}, 100);
}

function pattern_04() {
    //04 pattern for a double tap gesture
    //log(page_40b39ebc, `playPattern(doubleTap)`);
    navigator.vibrate(10);setTimeout(() => {navigator.vibrate(10);}, 100);
}

function pattern_05() {
    //05 pattern for long press
    //log(page_40b39ebc, `playPattern(longPress)`);
    navigator.vibrate(300);
}

function pattern_06() {
    //06 pattern when a drag operation starts
    //log(page_40b39ebc, `playPattern(dragStart)`);
    navigator.vibrate(50);setTimeout(() => {navigator.vibrate(50);}, 100);
}

function pattern_07() {
    //07 pattern when a drag operation ends
    //log(page_40b39ebc, `playPattern(dragEnd)`);
    navigator.vibrate(100);
}

function pattern_08() {
    //08 pattern for a ticking timer (short pulse)
    //log(page_40b39ebc, `playPattern(timerTick)`);
    navigator.vibrate(5);
}

function pattern_09() {
    //09 pattern when a confirmation is received
    //log(page_40b39ebc, `playPattern(confirmation)`);
    navigator.vibrate(10);setTimeout(() => {navigator.vibrate(50);}, 50);
}

function pattern_10() {
    //10 pattern when an action is dismissed
    //log(page_40b39ebc, `playPattern(dismiss)`);
    navigator.vibrate(50);setTimeout(() => {navigator.vibrate(10);setTimeout(() => {navigator.vibrate(25);}, 20);}, 20);
}

function pattern_11() {
    //11 very quick alert pattern
    //log(page_40b39ebc, `playPattern(shortAlert)`);
    navigator.vibrate(20);setTimeout(() => {navigator.vibrate(20);setTimeout(() => {navigator.vibrate(20);}, 40);}, 20);
}

function pattern_12() {
    //12 short, rhythmic pulse pattern
    //log(page_40b39ebc, `playPattern(pulse)`);
    navigator.vibrate(10);setTimeout(() => {navigator.vibrate(10);setTimeout(() => {navigator.vibrate(10);}, 20);}, 10);
}

function pattern_13() {
    //13 rapid blinking pattern
    //log(page_40b39ebc, `playPattern(blink)`);
    navigator.vibrate(15);setTimeout(() => {navigator.vibrate(15);setTimeout(() => {navigator.vibrate(15);}, 15);}, 15);
}

function pattern_14() {
    //14 series of fast taps
    //log(page_40b39ebc, `playPattern(tap)`);
    navigator.vibrate(8);setTimeout(() => {navigator.vibrate(8);setTimeout(() => {navigator.vibrate(8);setTimeout(() => {navigator.vibrate(8);}, 16);}, 16);}, 8);
}

function pattern_15() {
    //15 snappy, quick vibration bursts
    //log(page_40b39ebc, `playPattern(snappy)`);
    navigator.vibrate(10);setTimeout(() => {navigator.vibrate(10);setTimeout(() => {navigator.vibrate(10);}, 10);}, 10);
}

function pattern_16() {
    //16 flickering vibration pattern
    //log(page_40b39ebc, `playPattern(flicker)`);
    navigator.vibrate(5);setTimeout(() => {navigator.vibrate(5);setTimeout(() => {navigator.vibrate(5);setTimeout(() => {navigator.vibrate(5);}, 10);}, 10);}, 5);
}

function pattern_17() {
    //17 heartbeat-like quick double vibration
    //log(page_40b39ebc, `playPattern(heartbeat)`);
    navigator.vibrate(30);setTimeout(() => {navigator.vibrate(10);}, 40);
}

function pattern_18() {
    //18 rapid fire vibration pattern
    //log(page_40b39ebc, `playPattern(rapidFire)`);
    for (let i = 0; i < 20; i++) {
        let vibrationDuration = i % 2 === 0 ? 15 : 20;
        setTimeout(() => {
            navigator.vibrate(vibrationDuration);
        }, i * 30);
    }
}

function pattern_19() {
    //19 ripple pattern with 10 vibrations between 15ms and 20ms with 10ms intervals
    //log(page_40b39ebc, `playPattern(ripple)`);
    for (let i = 0; i < 10; i++) {
        let vibrationDuration = i % 2 === 0 ? 15 : 20;
        setTimeout(() => {
            navigator.vibrate(vibrationDuration);
        }, i * 30);
    }
}

function pattern_20() {
    //20 sharp, quick taps with slight pauses
    //log(page_40b39ebc, `playPattern(staccato)`);
    navigator.vibrate(8);setTimeout(() => {navigator.vibrate(8);setTimeout(() => {navigator.vibrate(8);setTimeout(() => {navigator.vibrate(8);}, 8);}, 8);}, 8);
}

function pattern_21() {
    //21 long, wave-like pattern with increasing and decreasing intervals
    //log(page_40b39ebc, `playPattern(wave)`);
    navigator.vibrate(50);setTimeout(() => {
        navigator.vibrate(100);setTimeout(() => {
            navigator.vibrate(150);setTimeout(() => {
                navigator.vibrate(100);setTimeout(() => {
                    navigator.vibrate(50);
                }, 100);
            }, 150);
        }, 100);
    }, 50);
}

function pattern_22() {
    //22 pattern that builds up intensity, then rapidly cuts off
    //log(page_40b39ebc, `playPattern(surge)`);
    navigator.vibrate(30);setTimeout(() => {
        navigator.vibrate(50);setTimeout(() => {
            navigator.vibrate(80);setTimeout(() => {
                navigator.vibrate(120);setTimeout(() => {
                    navigator.vibrate(200);
                }, 50);
            }, 30);
        }, 20);
    }, 10);
}

function pattern_23() {
    //23 zigzag pattern with alternating short and long vibrations
    //log(page_40b39ebc, `playPattern(zigzag)`);
    navigator.vibrate(30);setTimeout(() => {
        navigator.vibrate(10);setTimeout(() => {
            navigator.vibrate(30);setTimeout(() => {
                navigator.vibrate(10);setTimeout(() => {
                    navigator.vibrate(30);setTimeout(() => {
                        navigator.vibrate(10);
                    }, 50);
                }, 20);
            }, 40);
        }, 20);
    }, 10);
}

function pattern_24() {
    //24 long pattern with repeating echo-like vibrations
    //log(page_40b39ebc, `playPattern(echo)`);
    navigator.vibrate(50);setTimeout(() => {
        navigator.vibrate(40);setTimeout(() => {
            navigator.vibrate(30);setTimeout(() => {
                navigator.vibrate(20);setTimeout(() => {
                    navigator.vibrate(10);setTimeout(() => {
                        navigator.vibrate(5);
                    }, 50);
                }, 40);
            }, 30);
        }, 20);
    }, 10);
}


function pattern_25() {
    // pattern with wave-like vibrations that go from short to long and back to short, repeating
    //log(page_40b39ebc, `playPattern(waveForm)`);

    const waveDurations = [30, 60, 100, 150, 100, 60, 30]; // increasing and decreasing durations

    waveDurations.forEach((duration, i) => {
        setTimeout(() => {
            navigator.vibrate(duration);
        }, i * (duration + 50)); // space each wave with 50ms between
    });

    // Repeat the wave pattern
    setTimeout(() => {
        waveDurations.forEach((duration, i) => {
            setTimeout(() => {
                navigator.vibrate(duration);
            }, i * (duration + 50) + 1000); // second wave after 1000ms pause
        });
    }, waveDurations.length * 100 + 500);
}
