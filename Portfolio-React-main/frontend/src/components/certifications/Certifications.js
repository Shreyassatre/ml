import React from 'react';
import './certifications.css';

const Certifications = () => {
  // Certifications data as JSON objects
  const certificationsData = [
    {
      "name": "Big Data Hadoop and Spark Developer training",
      "issued": "9 Jan 2023 by SimpliLearn",
      "certID": "4078570",
      "logo": "images/simplilearn-logo.png",
      "verifyLink": "https://simpli-web.app.link/e/Euu4r2mAGwb",
      "certificateImage": "images/hadoop_spark-cert.png"
    },
    {
      "name": "Machine Learning in Python",
      "issued": "18 Nov 2022 by 365 Data Science",
      "certID": "CC-EF6D5D9C2C",
      "logo": "images/365datascience-logo.png",
      "verifyLink": "https://learn.365datascience.com/certificates/CC-EF6D5D9C2C/",
      "certificateImage": "images/ml_with_python-cert.png"
    },
    {
      "name": "Power BI",
      "issued": "15 Nov 2022 by 365 Data Science",
      "certID": "CC-2D5B33622E",
      "logo": "images/365datascience-logo.png",
      "verifyLink": "https://learn.365datascience.com/certificates/CC-EF6D5D9C2C/",
      "certificateImage": "images/power_bi-cert.png"
    },
    {
      "name": "React(Basic)",
      "issued": "4 Nov 2022 by HackerRank",
      "certID": "700B6FAD776F",
      "logo": "images/hackerrank-logo.png",
      "verifyLink": "https://www.hackerrank.com/certificates/700b6fad776f",
      "certificateImage": "images/react_basic-cert.png"
    },
    {
      "name": "Applications of AI for Anomaly Detection",
      "issued": "17 Sep 2022 by nVIDIA",
      "certID": "aed7658a912544acbc634275f7b4953a",
      "logo": "images/nvidia-logo.png",
      "verifyLink": "https://courses.nvidia.com/certificates/aed7658a912544acbc634275f7b4953a/",
      "certificateImage": "images/nvidia-cert1.png"
    },
    {
      "name": "Fundamentals of Deep Learning",
      "issued": "29 Jan 2022 by nVIDIA",
      "certID": "846865c78a1b49a0809203b9846f6f81",
      "logo": "images/nvidia-logo.png",
      "verifyLink": "https://courses.nvidia.com/certificates/846865c78a1b49a0809203b9846f6f81/",
      "certificateImage": "images/nvidia-cert2.png"
    },
    {
      "name": "Programming for Everybody (Getting Started with Python)",
      "issued": "4 May 2020 by coursera(Michigan University)",
      "certID": "7CGJ8ZXJDMTC",
      "logo": "images/coursera-logo.png",
      "verifyLink": "https://www.coursera.org/account/accomplishments/verify/7CGJ8ZXJDMTC",
      "certificateImage": "images/python-cert1.png"
    },
    {
      "name": "Python Data Structures",
      "issued": "5 May 2020 by coursera(Michigan University)",
      "certID": "H9FXND7YKPMU",
      "logo": "images/coursera-logo.png",
      "verifyLink": "https://www.coursera.org/account/accomplishments/verify/H9FXND7YKPMU",
      "certificateImage": "images/python-cert2.png"
    },
    {
      "name": "Computer Networks",
      "issued": "1 May 2020 by NPTEL(TCS-ION)",
      "certID": "72497-6892585-1016",
      "logo": "images/tcs_ion-logo.png",
      "verifyLink": "https://learning.tcsionhub.in/LX/ecertificate/verification",
      "certificateImage": "images/CN_nptel-cert.png"
    },
    {
      "name": "Fundamntals of Digital Marketing",
      "issued": "11 May 2020 by Google",
      "certID": "FDS MC2 V3Y",
      "logo": "images/google-logo.png",
      "verifyLink": "https://learndigital.withgoogle.com/digitalunlocked/sign-in?destination_url=%2Fcourse%2Fdigital-marketing%2Fcertification%2Fpost-assessment",
      "certificateImage": "images/goggle_digital_marketing-cert-png.jpg"
    }
  ]
  

  return (
    <div className="certifications section" id="certifications">
      <div className="section__title">Certifications</div>

      <div className="certifications__container container">
        <div className="certifications__sections">
          <br />
          <div className="certifications__content">
            {certificationsData.map((certification, index) => (
              <div className="certifications__data" key={index}>
                <img className="certifications__img" src={certification.certificateImage} alt="" />
                <div className="certifications__info">
                  <div className="certifications__name">{certification.name}</div>
                  <small>Issued: {certification.issued}</small><br />
                  <small>Cert. ID: {certification.certID}</small>
                  <div className="certifications__logo">
                    <img src={certification.logo} alt="" />
                  </div>
                  <div className="certifications__buttons">
                    <a href={certification.verifyLink} target="_blank" className="demo__button">Verify</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
