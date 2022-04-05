export const styles = {
    appContainer:  {
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        position: 'relative',
        flexDirection: 'row',
        gap: '20px',
        // padding: '20px 30px 30px 30px',
        padding: '10px 10px 10px 10px',
        userSelect: 'none',
        color: 'rgb(0, 0, 0)',
        maxWidth: '100%',
        textAlign: 'left',
        maxHeight: '100px',
        overFlow: 'hidden',
        border: '1px solid red',
        cursor: 'pointer', 
        justifyContent: 'flex-start',
        transform: 'scale(0.8)',
        zIndex: '1',
    },
    columnContainer:  {
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        position: 'relative',
        flexDirection: 'column',
        gap: '8px',
        padding: '20px 30px 0px 30px',
        userSelect: 'none',
        color: 'rgb(0, 0, 0)',
        maxWidth: '200px',
        maxHeight: '160px',
        overFlow: 'hidden',
        border: '1px solid red',
        cursor: 'pointer',
        margin: '15px auto',
        zIndex: '1'
    },
    img: {
        width: '110px',
        height: '110px',
        position: 'relative',
        borderRadius: '11px'
    },
    title: {
        fontSize: '14px',
        marginTop: '5px',
        textTransform: 'capitalize',
        display: 'flex'
    },
    flexedRow: {
        padding: '10px 30px',
        flexWrap: 'wrap',
        width: '80%',
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: '20% 20% 20% 20% 20%',
    },
    flexedColumn: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        padding: '30px 30px',
        margin: '10px',
        justifyContent: 'space-around',
        // border: '1px solid red'
    },
    toolBarButton: {
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: 'none'
    }
}