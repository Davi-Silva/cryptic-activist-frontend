/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useContext, useState, useEffect } from 'react';

import {
  ProgramCover,
  ProgramTitle,
  JourneyDiv,
  JourneyTitle,
  JourneyP,
  JourneyBuyAllCourses,
  ProgressDiv,
  Progress,
} from '../styled-components/courses-related-program.styled-component';

import Cover from '../static/img/course-img.jpg';

const CoursesRelatedProgram = (props) => {
  const {
    params,
  } = props.match;

  const courses = [
    {
      id: '1',
      title: 'Course 1',
      description: 'Cras ornare magna sit amet ultricies condimentum. Morbi aliquet, mauris bibendum placerat volutpat, neque justo cursus purus, ac faucibus ex purus eu ipsum. Maecenas risus sem, porta quis tempor vel, condimentum eget est. Nulla sagittis volutpat est non blandit. Integer nec arcu ut velit egestas auctor. Fusce molestie tincidunt vehicula. Nullam interdum feugiat lacus, quis pharetra augue dictum nec. Nulla maximus dui ut diam posuere tempus. Ut in arcu eu nibh lacinia ultricies. Proin congue, tellus quis viverra elementum, nibh libero aliquet purus, ut imperdiet lorem lectus at est.',
      publishedOn: 'December 17th 2019',
      author: 'Davi Silva',
      relatedProgram: 'Integrated Digital Media MicroMasters',
    },
    {
      id: '1',
      title: 'Course 2',
      description: 'Cras ornare magna sit amet ultricies condimentum. Morbi aliquet, mauris bibendum placerat volutpat, neque justo cursus purus, ac faucibus ex purus eu ipsum. Maecenas risus sem, porta quis tempor vel, condimentum eget est. Nulla sagittis volutpat est non blandit. Integer nec arcu ut velit egestas auctor. Fusce molestie tincidunt vehicula. Nullam interdum feugiat lacus, quis pharetra augue dictum nec. Nulla maximus dui ut diam posuere tempus. Ut in arcu eu nibh lacinia ultricies. Proin congue, tellus quis viverra elementum, nibh libero aliquet purus, ut imperdiet lorem lectus at est.',
      publishedOn: 'December 17th 2019',
      author: 'Davi Silva',
      relatedProgram: 'Integrated Digital Media MicroMasters',
    },
    {
      id: '1',
      title: 'Course 3',
      description: 'Cras ornare magna sit amet ultricies condimentum. Morbi aliquet, mauris bibendum placerat volutpat, neque justo cursus purus, ac faucibus ex purus eu ipsum. Maecenas risus sem, porta quis tempor vel, condimentum eget est. Nulla sagittis volutpat est non blandit. Integer nec arcu ut velit egestas auctor. Fusce molestie tincidunt vehicula. Nullam interdum feugiat lacus, quis pharetra augue dictum nec. Nulla maximus dui ut diam posuere tempus. Ut in arcu eu nibh lacinia ultricies. Proin congue, tellus quis viverra elementum, nibh libero aliquet purus, ut imperdiet lorem lectus at est.',
      publishedOn: 'December 17th 2019',
      author: 'Davi Silva',
      relatedProgram: 'Integrated Digital Media MicroMasters',
    },
    {
      id: '1',
      title: 'Course 4',
      description: 'Cras ornare magna sit amet ultricies condimentum. Morbi aliquet, mauris bibendum placerat volutpat, neque justo cursus purus, ac faucibus ex purus eu ipsum. Maecenas risus sem, porta quis tempor vel, condimentum eget est. Nulla sagittis volutpat est non blandit. Integer nec arcu ut velit egestas auctor. Fusce molestie tincidunt vehicula. Nullam interdum feugiat lacus, quis pharetra augue dictum nec. Nulla maximus dui ut diam posuere tempus. Ut in arcu eu nibh lacinia ultricies. Proin congue, tellus quis viverra elementum, nibh libero aliquet purus, ut imperdiet lorem lectus at est.',
      publishedOn: 'December 17th 2019',
      author: 'Davi Silva',
      relatedProgram: 'Integrated Digital Media MicroMasters',
    },
    {
      id: '1',
      title: 'Course 5',
      description: 'Cras ornare magna sit amet ultricies condimentum. Morbi aliquet, mauris bibendum placerat volutpat, neque justo cursus purus, ac faucibus ex purus eu ipsum. Maecenas risus sem, porta quis tempor vel, condimentum eget est. Nulla sagittis volutpat est non blandit. Integer nec arcu ut velit egestas auctor. Fusce molestie tincidunt vehicula. Nullam interdum feugiat lacus, quis pharetra augue dictum nec. Nulla maximus dui ut diam posuere tempus. Ut in arcu eu nibh lacinia ultricies. Proin congue, tellus quis viverra elementum, nibh libero aliquet purus, ut imperdiet lorem lectus at est.',
      publishedOn: 'December 17th 2019',
      author: 'Davi Silva',
      relatedProgram: 'Integrated Digital Media MicroMasters',
    },
    {
      id: '1',
      title: 'Course 6',
      description: 'Cras ornare magna sit amet ultricies condimentum. Morbi aliquet, mauris bibendum placerat volutpat, neque justo cursus purus, ac faucibus ex purus eu ipsum. Maecenas risus sem, porta quis tempor vel, condimentum eget est. Nulla sagittis volutpat est non blandit. Integer nec arcu ut velit egestas auctor. Fusce molestie tincidunt vehicula. Nullam interdum feugiat lacus, quis pharetra augue dictum nec. Nulla maximus dui ut diam posuere tempus. Ut in arcu eu nibh lacinia ultricies. Proin congue, tellus quis viverra elementum, nibh libero aliquet purus, ut imperdiet lorem lectus at est.',
      publishedOn: 'December 17th 2019',
      author: 'Davi Silva',
      relatedProgram: 'Integrated Digital Media MicroMasters',
    },
  ];

  return (
    <>
      <ProgramCover
        style={{
          backgroundImage: `url(${Cover})`,
        }}
      >
        <ProgramTitle>
          <div className="container">
            <div className="row">
              <div className="col-12">
                {params.slug}
              </div>
            </div>
          </div>
        </ProgramTitle>
      </ProgramCover>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-7 col-12">
            <JourneyDiv>
              <JourneyTitle>Your Program Journey</JourneyTitle>
              <JourneyP>
              Track and plan your progress through the 11 courses in this program.
              To complete the program, you must earn a verified certificate for each course.
              </JourneyP>
            </JourneyDiv>
            <JourneyBuyAllCourses>
              Upgrade All Remaining Courses ( $1089.00 $980.10 USD )
            </JourneyBuyAllCourses>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-5 col-12">
            <ProgressDiv>
              <Progress>
            Progress
              </Progress>
            </ProgressDiv>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesRelatedProgram;
