export const styles = {
    display: {
        display: 'block',
        width: '50%',
        height: '450px',
        margin: 'auto',
        borderRadius: '8px',
        position: 'absolute',
        top: 0, left: 0, bottom: 0, right: 0,
        zIndex: '5',
        // backgroundColor: '#e8e8e8',
        backgroundColor: 'rgba(232, 200, 232, 1)',
        border: '1px solid #fff'
    },
    overlay: {
        display: 'block',
        width: '101vw',
        height: '100vh',
        margin: 'auto',
        position: 'absolute',
        top: 0, left: -360, bottom: 0, right: 0,
        backgroundColor: 'rgba(111, 111, 111, 0.4)',
        zIndex: '-2',
        overflow: 'hidden',
    },
    hide: {
        display: 'none'
    },
    title: {
        textAlign: 'left' as 'left',
        margin: '30px'
    }
}