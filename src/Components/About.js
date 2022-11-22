import Container from 'react-bootstrap/Container'

export default function About() {
    return (
        <Container fluid="sm" id="about" bg="dark">
            <div className="about">
                <h1>About</h1>
                <h4>
                    Proin a ex diam. Suspendisse consectetur sem sit amet sem cursus, at cursus est vehicula. Suspendisse vulputate tortor tellus, ac auctor erat pretium laoreet. Vestibulum malesuada auctor nibh. Praesent id justo a enim tincidunt sagittis.
                </h4>
                <p></p>
                <h4>
                    Nam in orci viverra mauris tincidunt hendrerit. Donec posuere, nulla a mattis faucibus, magna erat placerat ante, ac vehicula ipsum purus at nunc. Duis suscipit neque at ante posuere, fringilla tristique nisi accumsan.
                </h4>
                <p></p>
            </div>
        </Container>
    )
}