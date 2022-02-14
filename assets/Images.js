const getSeason = d => Math.floor((d.getMonth() / 12 * 4)) % 4
const season = ['Winter', 'Spring', 'Summer', 'Autumn'][getSeason(new Date())]

function dependsImages() {
    switch(season) {
        case "Winter":
            return {
                background: require(`./img/background-winter.png`),
                floor: require('./img/floor-winter.png'),
                pipeCore: require('./img/pipe_core-winter.png'),
                pipeTop: require('./img/pipe_top-winter.png'),
                bird1: require('./img/bird3/bird1.png'),
                bird2: require('./img/bird3/bird2.png'),
                bird3: require('./img/bird3/bird3.png'),
            }
            case "Spring":
                return {
                    background: require(`./img/background-spring.png`),
                    floor: require('./img/floor.png'),
                    pipeCore: require('./img/pipe_core-spring.png'),
                    pipeTop: require('./img/pipe_top-spring.png'),
                    bird1: require('./img/bird1.png'),
                    bird2: require('./img/bird2.png'),
                    bird3: require('./img/bird3.png'),
                }
                case "Summer":
                    return {
                        background: require(`./img/background-summer.png`),
                        floor: require('./img/floor-summer.png'),
                        pipeCore: require('./img/pipe_core-summer.png'),
                        pipeTop: require('./img/pipe_top-summer.png'),
                        bird1: require('./img/bird1.png'),
                        bird2: require('./img/bird2.png'),
                        bird3: require('./img/bird3.png'),
                    }
                    case "Autumn":
                        return {
                            background: require(`./img/background-autumn.png`),
                            floor: require('./img/floor-autumn.png'),
                            pipeCore: require('./img/pipe_core-autumn.png'),
                            pipeTop: require('./img/pipe_top-autumn.png'),
                            bird1: require('./img/bird1.png'),
                            bird2: require('./img/bird2.png'),
                            bird3: require('./img/bird3.png'),
                        }
    }
}
const  set = dependsImages()
export default set