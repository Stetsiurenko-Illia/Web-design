import Api from "./Api";

export default{
    postTimer (credentials) {
        return Api().post('save-timers', credentials)
    },
    index (credentials) {
        return Api().post('find-timers', credentials)
    }
}