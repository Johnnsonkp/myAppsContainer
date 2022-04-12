export const styles = {
    appContainer:  {
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        position: 'relative',
        flexDirection: 'row',
        gap: '30px',
        padding: '10px 10px 10px 10px',
        userSelect: 'none',
        color: 'rgb(0, 0, 0)',
        maxWidth: '100%',
        textAlign: 'left',
        maxHeight: '100px',
        overFlow: 'hidden',
        border: '1px solid lightgray',
        borderRadius: '8px',
        cursor: 'pointer', 
        justifyContent: 'flex-start',
        transform: 'scaleY(0.8) scaleX(0.8)',
        zIndex: '1'
    },
    columnContainer:  {
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
        position: 'relative',
        flexDirection: 'column',
        gap: '8px',
        padding: '20px 30px 0px 20px',
        userSelect: 'none',
        color: 'rgb(0, 0, 0)',
        maxWidth: '200px',
        maxHeight: '160px',
        overFlow: 'hidden',
        cursor: 'pointer',
        margin: '15px auto',
        zIndex: '1',
        fontSize: '25px'
        
    },
    img: {
        width: '150px',
        height: '130px',
        position: 'relative',
        borderRadius: '5px'
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
    },
    toolBarButton: {
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: 'none'
    }
}