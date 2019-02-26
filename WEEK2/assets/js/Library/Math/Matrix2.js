export default class Matrix2
{
    /**
     * Represents a 2x2 Matrix
     * 
     * @param {array} items 
     */
    constructor(items){
        this.items = items || [
            0,0,
            0,0,
        ]
    }

    /**
     * Addition
     * 
     * @param {Matrix2} m 
     */
    add(m)
    {
        const a = this.items
        this.items = [
            a[0] + b[0], a[1] + b[1],
            a[2] + b[2], a[3] + b[3],
        ]
    }

    /**
     * Substraction
     * 
     * @param {Matrix2} m
     */
    sub(m)
    {
        const a = this.items
        this.items = [
            a[0] - b[0], a[1] - b[1],
            a[2] - b[2], a[3] - b[3],
        ]
    }

    /**
     * multiply
     * 
     * @param {Matrix2} m 
     */
    mul(m)
    {
        const a = this. items
        const c = []
        c[0] = a[0] * b[0] + a[1] * b[2]
        c[1] = a[0] * b[1] + a[1] * b[3]
        c[2] = a[2] * b[0] + a[3] * b[2]
        c[3] = a[2] * b[1] + a[3] * b[3]

        this.items = c

    }
}