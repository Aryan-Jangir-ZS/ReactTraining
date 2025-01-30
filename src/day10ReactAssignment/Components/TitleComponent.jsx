
const Title = ({title}) => {
    return (
        <div style={{fontSize:"2rem", fontWeight: "bold", display: 'flex', flexDirection: 'column', justifyContent: 'center', padding:"5px", border: '2px solid #000', flexWrap: 'wrap', }}>
            {title}
        </div>
    )
}

export default Title;