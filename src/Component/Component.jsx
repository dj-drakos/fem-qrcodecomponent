import './Component.css'

export default function Component({role}) {

  return (
  <div className="Component" role={role}>
      <img src="./image-qr-code.png" alt="QR Code to go to Frontend Mentor"/>
      <section>
        <h1>Improve your front-end skills by building projects
        </h1>

        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </section>
    </div>
  );
}