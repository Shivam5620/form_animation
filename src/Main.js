const Main = () => {
  return (
    <>
      <div className="header">
        <div className="sides">
          <a href="/" className="logo">
            INNOVATE
          </a>
        </div>
        <div className="info">
          <h1>KLS PITCH DAY</h1>
          <div className="meta">
            June 1st 2<span style={{ color: "orange" }}>0</span>2
            <span style={{ color: "orange" }}>4</span>, Mountain View CA
          </div>
          <div className="svg">
            <a href="mailto:klspitchday@gmail.com" target="blank">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="48"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
              </svg>
            </a>
            <p align="center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSewkjnipuzGpCeGYhxzbKtyBW4ROZKbUCaBlGyFppfrvOnbpA/viewform?usp=sf_link"
                className="btn twtr"
                target="_b"
              >
                Register Now!
              </a>
            </p>
          </div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 256 512"
            class="mt-4"
            height="64"
            width="64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"></path>
          </svg>
        </div>
      </div>
      <section id="how-it-works">
        <div class="container">
          <div class="flex">
            <div>
              <h2>About Us</h2>
              <p>
                To inspire innovation and entrepreneurship among students, the
                Entrepreneurship & Innovation (E & I) Club at Khan Lab School is
                organizing the first-ever Pitch Day contest at KLS on Saturday,
                June 1st, 2024.
              </p>
            </div>
            <div>
              <h2>What is Pitch Day?</h2>
              <p>
                It's a day when aspiring student entrepreneurs present their
                innovative ideas, products, or solutions to a panel of investors
                and entrepreneurs! The top pitches will receive monetary awards
                to help build their ideas.
              </p>
            </div>
            <div>
              <h2>Eligibility & Contest Rules:</h2>
              Open to any high school student from KLS or other schools.
              Participate individually or as a team of up to 4 students. Live
              Pitch your idea for 4-6 minutes followed by Q & A from
              judges/audience. Your idea can be a for-profit, non-profit, or a
              project that benefits numerous people or the world around us.
              Student makers can also pitch their creative products for an
              entrepreneurial venture. No prior experience or incorporation
              required! Your pitch s be business-like, and the dress code is
              smart casual.
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works">
        <div className="container">
          <h2>Sponsors</h2>
          <div className="flex">
            <div className="sponsor">
              <img src="./General_Catalyst.102037d88d4067666cde.webp" alt="" />
            </div>
            <div className="sponsor">
              <img src="./kls.afb99bf1c71491fd2408.webp" alt="" />
            </div>
            <div className="sponsor">
              <img src="./GlobalLogic.93551891f52f9be0d47d.webp" alt="" />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        © 2024 KLS Pitch Day. All Rights Reserved.
      </footer>
    </>
  );
};
export default Main;
