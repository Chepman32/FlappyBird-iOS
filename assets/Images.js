const getSeason = d => Math.floor((d.getMonth() / 12 * 4)) % 4
const season = 'Autumn'

function dependsImages() {
    switch(season) {
        case "Winter":
            return {
                background: require(`./img/background-winter.png`),
                floor: require('./img/floor.png'),
                pipeCore: require('./img/pipe_core.png'),
                pipeTop: require('./img/pipe_top.png'),
                bird1: require('./img/bird1.png'),
                bird2: require('./img/bird2.png'),
                bird3: require('./img/bird3.png'),
            }
            case "Spring":
                return {
                    background: require(`./img/background-spring.png`),
                    floor: require('./img/floor.png'),
                    pipeCore: require('./img/pipe_core.png'),
                    pipeTop: require('./img/pipe_top.png'),
                    bird1: require('./img/bird1.png'),
                    bird2: require('./img/bird2.png'),
                    bird3: require('./img/bird3.png'),
                }
                case "Summer":
                    return {
                        background: require(`./img/background-summer.png`),
                        floor: require('./img/floor.png'),
                        pipeCore: require('./img/pipe_core.png'),
                        pipeTop: require('./img/pipe_top.png'),
                        bird1: require('./img/bird1.png'),
                        bird2: require('./img/bird2.png'),
                        bird3: require('./img/bird3.png'),
                    }
                    case "Autumn":
                        return {
                            background: require(`./img/background-autumn.png`),
                            floor: require('./img/floor.png'),
                            pipeCore: require('./img/pipe_core.png'),
                            pipeTop: require('./img/pipe_top.png'),
                            bird1: require('./img/bird1.png'),
                            bird2: require('./img/bird2.png'),
                            bird3: require('./img/bird3.png'),
                        }
    }
}
const  set = dependsImages()
export default set