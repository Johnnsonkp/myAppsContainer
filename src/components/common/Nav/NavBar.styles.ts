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
        height: '200px', 
        width: '250px', 
        border: '1px solid red', 
        background: '#fff', 
        zIndex: '2',
        paddingTop: '2px',
        paddingLeft: '8px'
    },
    onMouseEnter: {
        color: '#08c',
        padding: '10px',
        fontSize: '25px', cursor: 'pointer',
    },
    onMouseLeave: {
        color: '#111',
        padding: '10px',
        fontSize: '25px', cursor: 'pointer',
    }
}