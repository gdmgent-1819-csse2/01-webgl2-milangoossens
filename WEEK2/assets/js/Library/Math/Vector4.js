export default class Vector4
{
    /**
     * Represents a four-dimensional vector
     * 
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @param {Number} w
     */
    constructor(x, y, z, w)
    {
        this.x = Number(x) || 0
        this.y = Number(y) || 0
        this.z = Number(z) || 0
        this.w = Number(w) || 0
    }

    /**
     * Length of the vector
     */
    norm(){
        return Math.sqrt(this.x**2 + this.y**2 + this.z**2 + this.w**2) 
    }

    /**
     * Addition
     * 
     * @param {Vector4} v 
     */
    add(v){
        this.x += v.x
        this.y += v.y
        this.z += v.z
        this.w += v.w
    }

    /**
     * Substraction
     * 
     * @param {Vector4} v 
     */
    sub(v){
        this.x -= v.x
        this.y -= v.y
        this.z -= v.z
        this.w -= v.w
    }

    /**
     * 
     * 
     * @param {Vector4} v 
     */
    dot(v){
        return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w
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
        this.w *= a
    }
}