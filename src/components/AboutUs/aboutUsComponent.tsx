import chamithuImage from '../../assets/chamithu.jpeg';
import dinalImage from '../../assets/dinal.jpeg';
import githubIcon from '../../assets/github.png';
import linkedinIcon from '../../assets/linkedin.png';
import msJennyImage from '../../assets/Ms.Jenny.jpeg';
import pawaraImage from '../../assets/pawara.jpg';
import profSamanthaImage from '../../assets/Prof__Samantha.jpg';
import scholarIcon from '../../assets/scholar.png';
import shenanImage from '../../assets/shenan.jpeg';

const AboutUsComponent = () => {
  return (
    <section className="homeSection py-8 px-6">
      <div
        className="feature-section mt-10 p-6 rounded-lg "
        style={{ backgroundColor: '#064472' }}
      >
        <h2 className="text-xl md:text-3xl font-bold text-gray-100 mb-4">
          Our Supervisors
        </h2>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <div className="p-6 rounded-xl flex flex-col items-center justify-center border-2 border-gray-300">
              <div className="w-48 h-48 mb-4 flex items-center justify-center overflow-hidden rounded-lg">
                <img
                  src={profSamanthaImage}
                  alt="Prof. Samantha Thelijjagoda"
                  className="w-full h-full object-cover object-top rounded-lg"
                />
              </div>
              <h3 className="text-lg mt-2">Prof. Samantha Thelijjagoda</h3>
              <br />
              <div className="text-center">
                <p className="font-bold">
                  Pro Vice-Chancellor (Research & International){' '}
                </p>
                <p>Sri Lanka Institute of Information Technology</p>
                <hr className="bg-sky-600 my-8" />
                <div className="flex justify-center space-x-4">
                  <a href="https://scholar.google.com/citations?user=_I6MLzcAAAAJ&hl=en">
                    <img
                      src={scholarIcon}
                      alt="Google Scholar"
                      className="w-6 h-6"
                    />
                  </a>
                  <a href="https://lk.linkedin.com/in/samantha-thelijjagoda-84342037">
                    <img
                      src={linkedinIcon}
                      alt="LinkedIn"
                      className="w-6 h-6"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl flex flex-col items-center justify-center border-2 border-gray-300">
              <div className="w-48 h-48 mb-4 flex items-center justify-center overflow-hidden rounded-lg">
                <img
                  src={msJennyImage}
                  alt="Ms. Jenny Krishara"
                  className="w-full h-full object-cover object-top rounded-lg"
                />
              </div>
              <h3 className="text-lg mt-2">Ms. Jenny Krishara </h3>
              <br />
              <div className="text-center">
                <p className="font-bold">Senior Lecturer </p>
                <p>Sri Lanka Institute of Information Technology</p>
                <hr className="bg-sky-600 my-8" />
                <div className="flex justify-center space-x-4">
                  <a href="https://scholar.google.com/citations?user=j6UINzQAAAAJ&hl=en">
                    <img
                      src={scholarIcon}
                      alt="Google Scholar"
                      className="w-6 h-6"
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/jenny-krishara-1a09a0111/">
                    <img
                      src={linkedinIcon}
                      alt="LinkedIn"
                      className="w-6 h-6"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="bg-sky-600 my-8" />

      <div
        className="feature-section mt-10 p-6 rounded-lg "
        style={{ backgroundColor: '#064472' }}
      >
        <h2 className="text-xl md:text-3xl font-bold text-gray-100 mb-4">
          Our Team
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl flex flex-col items-center justify-center border-2 border-gray-300">
            <div className="w-32 h-32 mb-4 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src={dinalImage}
                alt="Senadheera S.A.A.D"
                className="w-full h-full object-cover object-top rounded-lg"
              />
            </div>
            <h3 className="text-lg mt-2">Senadheera S.A.A.D</h3>
            <br />
            <div className="text-center">
              <p className="font-bold">Software Engineering Undergraduate </p>
              <p>Sri Lanka Institute of Information Technology</p>
              <hr className="bg-sky-600 my-8" />
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/Dinal-Senadheera">
                  <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/dinal-senadheera/">
                  <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl flex flex-col items-center justify-center border-2 border-gray-300">
            <div className="w-32 h-32 mb-4 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src={shenanImage}
                alt="Perera S.S"
                className="w-full h-full object-cover object-top rounded-lg"
              />
            </div>
            <h3 className="text-lg mt-2">Perera S.S </h3>
            <br />
            <div className="text-center">
              <p className="font-bold">Software Engineering Undergraduate </p>
              <p>Sri Lanka Institute of Information Technology</p>
              <hr className="bg-sky-600 my-8" />
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/ShenanPerera">
                  <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/shenan-perera/">
                  <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl flex flex-col items-center justify-center border-2 border-gray-300">
            <div className="w-32 h-32 mb-4 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src={pawaraImage}
                alt="Gunathilaka L.P.N"
                className="w-full h-full object-cover object-top rounded-lg"
              />
            </div>
            <h3 className="text-lg mt-2">Gunathilaka L.P.N. </h3>
            <br />
            <div className="text-center">
              <p className="font-bold">Software Engineering Undergraduate </p>
              <p>Sri Lanka Institute of Information Technology</p>
              <hr className="bg-sky-600 my-8" />
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/Navojith">
                  <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/pawara-navojith-aa607a208/">
                  <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl flex flex-col items-center justify-center border-2 border-gray-300">
            <div className="w-32 h-32 mb-4 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src={chamithuImage}
                alt="Gunawardana U.G.C.D"
                className="w-full h-full object-cover object-top rounded-lg"
              />
            </div>
            <h3 className="text-lg mt-2">Gunawardana U.G.C.D</h3>
            <br />
            <div className="text-center">
              <p className="font-bold">Software Engineering Undergraduate </p>
              <p>Sri Lanka Institute of Information Technology</p>
              <hr className="bg-sky-600 my-8" />
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/ch4mi2">
                  <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/chamithu-gunawardana-009909215/">
                  <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsComponent;
