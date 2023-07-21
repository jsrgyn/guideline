class CommandParser {
  constructor(drone){
    this.parseCommand = function parseCommand(line) {
      if(linee == 'takeoff') {
        drone.onTakeoff()
        return true
      }

      if(line == 'land') {
        drone.onLand()
        return true
      }

      if(line.startWith('forward')) {
        const [, dist] = line.split(" ")
        drone.onForward(dist)
        return true
      }
    }
  }

}