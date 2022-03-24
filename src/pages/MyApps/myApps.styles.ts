export const styles = {
    appContainer:  {
        textDecoration: 'none',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        position: 'relative',
        flexDirection: 'row',
        gap: '8px',
        padding: '20px 30px 30px 30px',
        userSelect: 'none',
        color: 'rgb(0, 0, 0)',
        // maxWidth: '170px',
        maxWidth: '100%',
        textAlign: 'left',
        maxHeight: '150px',
        overFlow: 'hidden',
        border: '1px solid red',
        cursor: 'pointer', 
        justifyContent: 'flex-start',
        transform: 'scale(0.8)'
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
        padding: '20px 30px 30px 30px',
        userSelect: 'none',
        color: 'rgb(0, 0, 0)',
        // maxWidth: '80%',
        // margin: 'auto',
        // maxHeight: '150px',
        maxWidth: '170px',
        // maxWidth: '500px',
        maxHeight: '150px',
        overFlow: 'hidden',
        border: '1px solid red',
        cursor: 'pointer'
    },
    img: {
        width: '100px',
        height: '90px',
        position: 'relative',
        borderRadius: '11px'
    },
    title: {
        fontSize: '14px',
        marginTop: '5px',
        textTransform: 'capitalize',
        display: 'flex',
    },
    flexedRow: {
        display: 'flex',
        padding: '30px 30px',
        margin: '10px',
        justifyContent: 'space-around'
    },
    flexedColumn: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        padding: '30px 30px',
        margin: '10px',
        justifyContent: 'space-around',
        border: '1px solid red'
    },
    toolBarButton: {
        cursor: 'pointer'
    }
}