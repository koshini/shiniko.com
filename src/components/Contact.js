import React, { Component } from 'react';
import styled from 'styled-components';

const Connect = styled.div`
  width: 100%;
  margin-left: 3rem;
`;

const ContactCard = styled.div`
  letter-spacing: 0.1em;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: row-reverse;
  transform: rotate(90deg);
  transform-origin: bottom right;
  pointer-events: auto;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;

  &:before {
    content: '';
    height: 0.3rem;
    background: ${props => props.theme.black};
    width: 100%;
    bottom: -1rem;
    position: absolute;
    display: block;
    margin: 0 auto;
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }

  &:hover:before {
    opacity: 1;
    bottom: 3rem;
  }

  ul {
    list-style: none;
    width: 100%;
    margin: auto;
    padding: 0;

    li {
      flex: 1;
      width: 1em;
      margin-right: 1rem;
      display: inline-flex;
      transform: translateY(3px);

      a {
        img {
          max-width: 100%;
          height: auto;
          display: inline-block;
        }
      }
    }
  }
`;

const LinkedinIcon = styled.img`
  transform: scale(1.2);

  &:hover {
    transform: scale(1.6);
  }
`;

const GithubIcon = styled.img`
  transform: scale(1.1);
  &:hover {
    transform: scale(1.5);
  }
`;

const EmailIcon = styled.img`
  transform: scale(0.9);
  &:hover {
    transform: scale(1.3);
  }
`;

class Contact extends Component {
  render() {
    return (
      <ContactCard className="ContactCard">
        <Connect className="connect">Contact</Connect>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
              href="https://linkedin.com/in/shiniko/"
            >
              <LinkedinIcon
                className="linkedin-icon"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgYmFzZVByb2ZpbGU9InRpbnkiIGhlaWdodD0iMjRweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMiIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTgsMTlINVY5aDNWMTl6IE0xOSwxOWgtM3YtNS4zNDJjMC0xLjM5Mi0wLjQ5Ni0yLjA4NS0xLjQ3OS0yLjA4NWMtMC43NzksMC0xLjI3MywwLjM4OC0xLjUyMSwxLjE2NUMxMywxNCwxMywxOSwxMywxOWgtMyAgIGMwLDAsMC4wNC05LDAtMTBoMi4zNjhsMC4xODMsMmgwLjA2MmMwLjYxNS0xLDEuNTk4LTEuNjc4LDIuOTQ2LTEuNjc4YzEuMDI1LDAsMS44NTQsMC4yODUsMi40ODcsMS4wMDEgICBDMTguNjgzLDExLjA0LDE5LDEyLjAwMiwxOSwxMy4zNTNWMTl6Ii8+PC9nPjxnPjxlbGxpcHNlIGN4PSI2LjUiIGN5PSI2LjUiIHJ4PSIxLjU1IiByeT0iMS41Ii8+PC9nPjwvc3ZnPg=="
                alt="linkedin"
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="email"
              href="mailto:shini.g.ko@gmail.com"
            >
              <EmailIcon
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjk4NCwxM0MxMC4wMzEsMTMtMC4wMzEsNC44OTEtMC4wMzEsNC44OTFWNGMwLTEuMTA0LDAuODk2LTIsMi4wMDItMmgyMC4wMjYgIEMyMy4xMDQsMiwyNCwyLjg5NiwyNCw0bC0wLjAxNiwxQzIzLjk4NCw1LDE0LjAzMSwxMywxMS45ODQsMTN6IE0xMS45ODQsMTUuNzVjMi4xNDEsMCwxMi03Ljc1LDEyLTcuNzVMMjQsMjAgIGMwLDEuMTA0LTAuODk2LDItMi4wMDMsMkgxLjk3MWMtMS4xMDUsMC0yLjAwMi0wLjg5Ni0yLjAwMi0ybDAuMDE2LTEyQy0wLjAxNiw4LDEwLjAzMSwxNS43NSwxMS45ODQsMTUuNzV6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
                alt="email"
                className="email-icon"
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="github"
              href="https://github.com/koshini"
            >
              <GithubIcon
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB3aWR0aD0iMTc5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTY2NCA4OTZxMCAyNTEtMTQ2LjUgNDUxLjV0LTM3OC41IDI3Ny41cS0yNyA1LTM5LjUtN3QtMTIuNS0zMHYtMjExcTAtOTctNTItMTQyIDU3LTYgMTAyLjUtMTh0OTQtMzkgODEtNjYuNSA1My0xMDUgMjAuNS0xNTAuNXEwLTEyMS03OS0yMDYgMzctOTEtOC0yMDQtMjgtOS04MSAxMXQtOTIgNDRsLTM4IDI0cS05My0yNi0xOTItMjZ0LTE5MiAyNnEtMTYtMTEtNDIuNS0yN3QtODMuNS0zOC41LTg2LTEzLjVxLTQ0IDExMy03IDIwNC03OSA4NS03OSAyMDYgMCA4NSAyMC41IDE1MHQ1Mi41IDEwNSA4MC41IDY3IDk0IDM5IDEwMi41IDE4cS00MCAzNi00OSAxMDMtMjEgMTAtNDUgMTV0LTU3IDUtNjUuNS0yMS41LTU1LjUtNjIuNXEtMTktMzItNDguNS01MnQtNDkuNS0yNGwtMjAtM3EtMjEgMC0yOSA0LjV0LTUgMTEuNSA5IDE0IDEzIDEybDcgNXEyMiAxMCA0My41IDM4dDMxLjUgNTFsMTAgMjNxMTMgMzggNDQgNjEuNXQ2NyAzMCA2OS41IDcgNTUuNS0zLjVsMjMtNHEwIDM4IC41IDg5dC41IDU0cTAgMTgtMTMgMzB0LTQwIDdxLTIzMi03Ny0zNzguNS0yNzcuNXQtMTQ2LjUtNDUxLjVxMC0yMDkgMTAzLTM4NS41dDI3OS41LTI3OS41IDM4NS41LTEwMyAzODUuNSAxMDMgMjc5LjUgMjc5LjUgMTAzIDM4NS41eiIvPjwvc3ZnPg=="
                alt="github"
                className="github-icon"
              />
            </a>
          </li>
        </ul>
      </ContactCard>
    );
  }
}

export default Contact;
