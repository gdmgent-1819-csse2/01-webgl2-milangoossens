export default class Vector2
{
    /**
     * Represents a two-dimensional vector
     * 
     * @param {Number} x
     * @param {Number} y
     */
    constructor(x, y)
    {
        this.x = Number(x) || 0
        this.y = Number(y) || 0
    }

    /**
     * Length of the vector
     */
    norm(){
        return Math.sqrt(this.x**2 + this.y**2) 
    }

    /**
     * Addition
     * 
     * @param {Vector2} v 
     */
    add(v){
        this.x += v.x
        this.y += v.y
    }

    /**
     * Substraction
     * 
     * @param {Vector2} v 
     */
    sub(v){
        this.x -= v.x
        this.y -= v.y
    }

    dot(v){
        return this.x * v.x + this.y * v.y
    }

    /**
     * scalar
     * 
     * @param {Number} a 
     */
    scalar(a){
        this.x *= a
        this.y *= a
    }
}