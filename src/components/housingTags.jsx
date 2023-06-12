const HousingTags = (props) => {
    return (
        <div className="tags">
            <ul className="tags-list">
                <li>{props.tags}</li>
            </ul>
        </div>
    );
  };
  
  export default HousingTags;