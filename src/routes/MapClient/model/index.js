import modelEnhance from '@/utils/modelEnhance';

export default modelEnhance({
    namespace: 'mapClient',
    // state: {
    //     status: undefined,
    // },
    state: {
        windowState: {
            map: true,
            attribute: true,
            log: true
        },
        mapState: {
            map: true,
            attribute: true,
            log: true
        },
    },
    effects: {

    },
    reducers: {
        toggleMap(state, { payload }) {
            return {
                ...state,
                windowState: {
                    ...state.windowState,
                    map: payload
                },
            };
        },
        toggleLog(state, { payload }) {
            return {
                ...state,
                windowState: {
                    ...state.windowState,
                    log: payload
                },
            };
        }
    }
});