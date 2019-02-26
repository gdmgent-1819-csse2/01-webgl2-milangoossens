export default class Vector3
{
    /**
     * Represents a three-dimensional vector
     * 
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     */
    constructor(x, y, z)
    {
        this.x = Number(x) || 0
        this.y = Number(y) || 0
        this.z = Number(z) || 0
    }

    /**
     * Length of the vector
     */
    norm(){
        return Math.sqrt(this.x**2 + this.y**2 + this.z**2) 
    }

    /**
     * Addition
     * 
     * @param {Vector3} v 
     */
    add(v){
        this.x += v.x
        this.y += v.y
        this.z += v.z
    }

    /**
     * Substraction
     * 
     * @param {Vector3} v 
     */
    sub(v){
        this.x -= v.x
        this.y -= v.y
        this.z -= v.z
    }

    dot(v){
        return this.x * v.x + this.y * v.y + this.z * v.z
    }

    /**
     * scalar
     * 
     * @param {Number} a 
     */
    scalar(a){
        this.x *= a
        this.y *= a
        this.z *= a
    }
}