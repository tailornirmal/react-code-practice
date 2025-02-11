import "./Form.css";
const Form = () => {
  return (
    <div id="form-container">
      <div id="left">
        <form>
          <div>
            <label>
              Your Name :
              <input type="text" name="name" id="name" onChange={() => {}} />
            </label>
          </div>
          <div>
            <label>
              Your Age :
              <input type="number" name="age" id="age" onChange={() => {}} />
            </label>
          </div>
          <div>
            <label>
              Gender: <input type="radio" name="gender" value="Male" />
              Male
              <input type="radio" name="gender" value="Female" />
              Female
            </label>
          </div>
          <div>
            <label>
              Email :
              <input
                type="email"
                name="email"
                id="email"
                value=""
                onChange={() => {}}
              />
            </label>
          </div>
          <div>
            <label>Select Access Level</label>
            <br />
            <input type="checkbox" id="Admin" value="Admin" name="Admin" />
            <label>Admin</label>
            <br />
            <input type="checkbox" id="User" value="User" name="User" />
            <label>User</label>
            <br />
            <input type="checkbox" id="Access" value="Access" name="Access" />
            <label>Access</label>
          </div>
          <div>
            <label>Mobile</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div>
            <label>
              Profile Picture
              <input type="file" id="profile-picture" name="profile-picture" />
            </label>
          </div>
        </form>
      </div>

      <div id="right">
        <div id="object3">Entered values</div>
        <div id="object4">
          <p>This is name</p>
          <p>This is age</p>
        </div>
      </div>
    </div>
  );
};

export default Form;
