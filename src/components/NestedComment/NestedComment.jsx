import { useState } from "react"
import Comment from "./components/Comment"
import "./Styles.css"
import useNode from "./hooks/useNode";
const comments = {
    id : 1,
    items : [
      
    ],
};


const NestedComment = () => {
    
    const[commentData,setCommentData] = useState(comments);
    const {insertNode,editNode} = useNode();


    const handleInsertNode = (folderId,input)=>{
        const finalStructure = insertNode(commentData,folderId,input);
        setCommentData(finalStructure);
    }

    const handleEditNode = (folderId, value) => {
        const finalStructure = editNode(commentData, folderId, value);
        setCommentData(finalStructure);
      };

  return (
    <>
   
    <Comment comment={commentData} handleEditNode={handleEditNode} handleInsertNode={handleInsertNode}/>


    </>
  )
}

export default NestedComment