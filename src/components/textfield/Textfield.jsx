export default function Textfield({ onChange, suffix, placeholder }) {
    return(
        <div>
            <input 
                type="text" 
                onChange={onChange} 
                placeholder={placeholder} 
                aria-controls="table_id" 
                className="custom_input_field py-1 px-3" 
            />
        </div>
    ) 
}