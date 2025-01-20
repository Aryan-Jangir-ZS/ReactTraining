
const ImgDescription = ({description}) => {

    return(
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems:"start", padding:"20px", border: '2px solid #000', flexWrap: 'wrap', maxWidth: '300px'  ,minHeight:"150px" , minWidth:"200px" }}>
            {description}
        </div>
    )
}

export default ImgDescription;