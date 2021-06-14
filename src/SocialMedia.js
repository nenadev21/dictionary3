import "./SocialMedia.css";

function SocialMedia() {
  return (
    <div className="social-media">
      <p> Coded by Dani Vera</p>
      <ul>
        <li>
          <a
            className="social-media-link"
            href="https://www.linkedin.com/in/daniela-vera-65970320/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"> Linkedin</i>
          </a>
        </li>
        <li>
          <a
            className="social-media-link"
            href="mailto:dvera1@babson.edu"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fas fa-envelope"> Email</i>
          </a>
        </li>
        <li>
          <a
            className="social-media-link"
            href="https://twitter.com/daniveralopez"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-twitter"> Twitter</i>
          </a>
        </li>
        <li>
          <a
            className="social-media-link"
            href="https://www.facebook.com/daniela.veralopez.1/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-facebook"> Facebook</i>
          </a>
        </li>
      </ul>
      <p className="git-hub">
        {" "}
        Fully open source{" "}
        <span>
          <a
            className="social-media-link"
            href="https://github.com/nenadev21/dictionary3"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-github"> GitHub</i>
          </a>
        </span>
      </p>
    </div>
  );
}

export default SocialMedia;
