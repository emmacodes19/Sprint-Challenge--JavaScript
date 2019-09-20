// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker {
    constructor(attributes) {
        this.newLength = attributes.length,
            this.newWidth = attributes.width,
            this.newHeight = attributes.height
    }
    
    volume() {
        return (this.length * this.width * this.height);
    }
    
    surfaceArea() {
        return 2 * (this.newLength * this.newWidth + this.newLength * this.newHeight + this.newWidth * this.newHeight);
    }
}




const cuboid = new CuboidMaker( {
    length: 4,
    width: 5,
    height: 5

});




// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130






// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(cubeAttributes){
        super(cubeAttributes);
        this.newLength = cubeAttributes.length;
        
    }

    volume_cube() {

        return Math.pow(this.length, 3);

    }

    surfaceArea_cube() {
        return 6* Math.pow(this.length,2);
    }
}



const cube = new CubeMaker ({
    
    length: 2,
    width: 2,
    height: 2
    
    

});

console.log(cube.volume_cube()); // 8
console.loh(cube.surfaceArea_cube()); // 24

