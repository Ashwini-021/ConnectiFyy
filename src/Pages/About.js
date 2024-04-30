import React from "react";

const About = () => {
  return (
    <div style={styles.container} >
      <h1 style={styles.heading}>About ConnectiFy</h1>
      <p style={styles.paragraph}>
        ConnectiFy is a modern chatting application that allows users to connect
        with friends, family, and colleagues in real-time. With its intuitive
        interface and robust features, ConnectiFy makes communication easy and
        enjoyable.
      </p>
      <p style={styles.paragraph}>
        Whether you're sharing updates, discussing ideas, or simply catching up
        with loved ones, ConnectiFy provides a seamless chatting experience
        across devices.
      </p>
      <p style={styles.paragraph}>
        ConnectiFy offers a variety of features, including:
      </p>
      <ul style={styles.list}>
        <li>Real-time messaging</li>
        <li>Group chats</li>
        <li>Emoji and GIF support</li>
        <li>Customizable profiles</li>
        <li>And much more!</li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    maxHeight:"500px",
//     border:'2px solid black',
    margin: "0 auto",
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    color: "white",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "20px",
    color: "white",
  },
  paragraph: {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "20px",
    color: "white",
  },
  list: {
    paddingLeft: "20px",
    color: "white",
  },
};

export default About;
