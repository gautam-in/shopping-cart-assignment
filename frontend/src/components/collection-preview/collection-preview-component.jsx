// import React from "react";
// import CollectionItem from "../collection-item/collection-item.component";
// import './collection-preview.styles.scss';

// const CollectionPreview =({category, items})=>(
//     <div className="collection-preview">
//         <h1 className="title">{category}</h1>
//         <div className="preview">
            
//       {
//           items.filter((item,idx)=>idx<4)
//           .map(({id,...otherProps})=>(
//               <CollectionItem key={id} {...otherProps}/>
//           ))
//       }
            
//         </div>
//     </div>
// )

// export default CollectionPreview ;