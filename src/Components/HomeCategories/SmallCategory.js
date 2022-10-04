import {Link} from "react-router-dom";

function SmallCategory({categoryName,image,id}) {
    return(
        <div className="smallCategory grid-item col-sm-6 height-x1">
            <div className="category category-light category-absolute overlay-dark">
                <Link to={'/categories/?subcategoryId=' + id}>
                    <figure className="category-media">
                        <img src={image} alt="category" width="585"
                             height="397" style={{backgroundColor: "#ebedef"}}/>
                    </figure>
                </Link>
                <div className="category-content">
                    <h4 className="category-name"><Link to={'/categories/?subcategoryId=' + id}>{categoryName}</Link></h4>
                </div>
            </div>
        </div>
    )
}

export default SmallCategory