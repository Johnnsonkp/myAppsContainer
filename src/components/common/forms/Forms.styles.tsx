export const styles = {
    display: {
        display: 'block',
        border: '1px solid red',
        width: '50%',
        height: '400px',
        margin: 'auto',
        borderRadius: '15px',
        position: 'absolute',
        top: 0, left: 0, bottom: 0, right: 0,
        zIndex: '5',
        backgroundColor: 'lightgreen',
    },
    overlay: {
        display: 'block',
        border: '1px solid red',
        width: '101vw',
        height: '100vh',
        margin: 'auto',
        position: 'absolute',
        top: 0, left: -360, bottom: 0, right: 0,
        // zIndex: '3',
        backgroundColor: 'rgba(111, 111, 111, 0.2)',
        overflow: 'hidden',
    },
    hide: {
        display: 'none'
    },
    title: {
        textAlign: 'center' as 'center',
        margin: '20px'
    }
}