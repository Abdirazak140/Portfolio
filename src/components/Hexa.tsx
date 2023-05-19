import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

function Hexa(){
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return(
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={
            {
                particles: {
                    number: {
                        value: 10,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#ffffff"
                    },
                    shape: {
                        type: "polygon",
                    },
                    opacity: {
                        value: 0.5,
                        random: false,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 80,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 10,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: false
                    },
                    move: {
                        enable: true,
                        speed: 3,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "bubble"
                        },
                        resize: true
                    },
                    modes: {
                        bubble: {
                            distance: 800,
                            size: 100,
                            duration: 2,
                            opacity: 0.8,
                            speed: 3
                        },
                    }
                },
                retina_detect: true
            }
            
        }
        />
    )
}

export default Hexa;