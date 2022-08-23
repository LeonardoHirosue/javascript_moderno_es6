module.exports = {
    get auInKm() { return 149587870 },    
    convertAuToKm(au) {
        return this.auInKm*au
    }
}
