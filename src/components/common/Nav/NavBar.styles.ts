export const navBarStyles = {
    display: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px 10px',
        backgroundColor: 'rgb(245, 243, 241)',
        borderBottom: '1px solid rgb(234, 234, 234)',
        height: '48px'
    },
    AppLogo: {
        width: '110px', 
        alignSelf: 'center',
        justifyContent: 'flex-end',
        marginLeft: '15px'
    },
    effectStyle: {
        position: 'absolute' as 'absolute', 
        top: '1px', 
        left: '1px', 
        height: '100%', 
        width: '320px', 
        // borderTop: '1px solid #111', 
        // borderRight: '1px solid #111',
        borderTop: '1px solid transparent', 
        borderRight: '1px solid transparent',
        background: '#fff', 
        zIndex: '2',
        paddingTop: '2px',
        paddingLeft: '8px',
        boxShadow: 'rgb(0 0 0 / 30%) 0px 25.6px 70.6px 15px',
        boxSizing: 'border-box' as 'border-box',
        overflow: 'hidden'
    },
    onMouseEnter: {
        color: '#08c',
        padding: '10px',
        fontSize: '25px', 
        cursor: 'pointer',
    },
    onMouseLeave: {
        color: '#111',
        padding: '10px',
        fontSize: '25px', 
        cursor: 'pointer',
    }
}