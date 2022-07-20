class MxClient {
    constructor() {
        return Object.create(null)
    }
    static VERSION = '4.2.2'

    static IS_IE = navigator.userAgent != null && navigator.userAgent.indexOf('MSIE') >= 0

}

export default MxClient
