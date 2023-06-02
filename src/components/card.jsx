function Card({title, pictures }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <img src={pictures} alt="freelance" height={80} width={80} />
            <span>{title}</span>
        </div>
    )
}
 
export default Card