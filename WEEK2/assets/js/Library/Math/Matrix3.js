export default class Matrix3
{
    /**
     * Represents a 3x3 Matrix
     * 
     * @param {array} items 
     */
    constructor(items){
        this.items = items || [
            0,0,0,
            0,0,0,
            0,0,0,
        ]
    }

    /**
     * Addition
     * 
     * @param {Matrix3} m 
     */
    add(m)
    {
        const a = this.items
        this.items = [
            a[0] + b[0], a[1] + b[1], a[2] + b[2],
            a[3] + b[3], a[4] + b[4], a[5] + b[5],
            a[6] + b[6], a[7] + b[7], a[8] + b[8],
        ]
    }

    /**
     * Substraction
     * 
     * @param {Matrix3} m
     */
    sub(m)
    {
        const a = this.items
        this.items = [
            a[0] - b[0], a[1] - b[1], a[2] - b[2],
            a[3] - b[3], a[4] - b[4], a[5] - b[5],
            a[6] - b[6], a[7] - b[7], a[8] - b[8],
        ]
    }

    /**
     * multiply
     * 
     * @param {Matrix3} m 
     */
    mul(m)
    {
        const a = this. items
        const c = []
        c[0] = a[0] * b[0] + a[1] * b[3] + a[2] * b[6]
        c[1] = a[0] * b[1] + a[1] * b[4] + a[2] * b[7]
        c[2] = a[0] * b[2] + a[1] * b[5] + a[2] * b[8]
        c[3] = a[3] * b[0] + a[4] * b[3] + a[5] * b[6]
        c[4] = a[3] * b[1] + a[4] * b[4] + a[5] * b[7]
        c[5] = a[3] * b[2] + a[4] * b[5] + a[5] * b[8]
        c[6] = a[6] * b[0] + a[7] * b[3] + a[8] * b[6]
        c[7] = a[6] * b[1] + a[7] * b[4] + a[8] * b[7]
        c[8] = a[6] * b[2] + a[7] * b[5] + a[8] * b[8]

        this.items = c

    }
}