// import "./Form.css"

const Formulaire = () => {
  return (
    <div className="mycard ">
      <div
        className="card auth-card input-field"
        style={{
          backgroundImage: `url(https://image.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg)`,
        }}
      >
        <h1>Envoyer E-mail d'acceptation</h1>
        <form>
          <label>Nom</label>
          <textarea name="name" rows="4" />
          <label>Email</label>
          <textarea name="name" rows="4" />
          <label>Message</label>
          <textarea name="message" rows="4" />
          <input type="submit" value="send" />
        </form>
      </div>
    </div>
  );
};
export default Formulaire;
