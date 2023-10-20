// import React, { useState } from 'react';
// const initialField = {
//     name: '',
//     quantity: 0,
//     price: 0,
// };
// interface iFieldArray {
//     name: string
//     label: string
//     type:
// }
//
// const fieldArray = [
//     { name: 'name', label: 'Item Name', required: true },
//     { name: 'quantity', label: 'Quantity', required: true, type: 'number' },
//     { name: 'price', label: 'Price', required: true, type: 'number' },
// ];
//
// const ItemForm = ({ fieldArray }) => {
//     const [items, setItems] = useState([]);
//     const [currentItem, setCurrentItem] = useState({ ...initialField });
//
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setCurrentItem({
//             ...currentItem,
//             [name]: value,
//         });
//     };
//
//     const addItem = () => {
//         // Validate the current item
//         const isItemValid = validateItem(currentItem, fieldArray);
//
//         if (isItemValid) {
//             setItems([...items, currentItem]);
//             setCurrentItem({ ...initialField });
//         }
//     };
//
//     const validateItem = (item, fieldArray) => {
//         // Implement validation logic based on fieldArray
//         // For example, check for required fields and correct data types
//         // Return true if the item is valid, false otherwise
//     };
//
//     return (
//         <div>
//             <form>
//                 {fieldArray.map((field:any) => (
//                     <input
//                         key={field.name}
//                         type={field.type || 'text'}
//                         name={field.name}
//                         value={currentItem[field.name]}
//                         placeholder={field.label}
//                         onChange={handleChange}
//                     />
//                 )}
//
//                 <button type="button" onClick={addItem}>
//                     Add Item
//                 </button>
//             </form>
//
//             <ul>
//                 {items.map((item, index) => (
//                     <li key={index}>
//                         {fieldArray.map((field) => (
//                             <span key={field.name}>
//                 {field.label}: {item[field.name]}
//               </span>
//                         )}
//                     </li>
//                 )}
//             </ul>
//         </div>
//     );
// };
//
// // export default ItemForm;
//
// function App() {
//     return (
//         <div>
//             <h1>Add Items</h1>
//             <ItemForm fieldArray={fieldArray} />
//         </div>
//     );
// }
//
// export default App;
//
