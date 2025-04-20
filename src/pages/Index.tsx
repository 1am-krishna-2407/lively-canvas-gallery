import { useState } from 'react';
import Navigation from '@/components/Navigation';
import FeedbackForm from '@/components/FeedbackForm';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Edit } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"

const Index = () => {
  const [coverImage, setCoverImage] = useState('/placeholder.svg');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section with Editable Cover Image */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={coverImage}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Krishna Kumar Jha</h1>
          <p className="text-xl md:text-2xl mb-8">Software Engineer</p>
          <label className="cursor-pointer">
            <Button variant="outline" className="bg-white/10 backdrop-blur-sm">
              <Edit className="mr-2 h-4 w-4" /> Change Cover Image
            </Button>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* About Section */}
        <section id="about" className="scroll-mt-20">
          <h2 className="section-title">About Me</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-700">
                To secure a challenging role as a Software Engineer in a reputed organization where I can utilize my
                skills in artificial intelligence, cloud computing to contribute in impactful projects, and grow as a
                professional while achieving organizational goals.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-20">
          <h2 className="section-title">Education</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold">Lovely Professional University</h3>
                <p className="text-gray-600">Bachelor of Technology in Computer Science and Engineering</p>
                <p className="text-gray-600">CGPA: 7.6 | 2026</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-20">
          <h2 className="section-title">Experience</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Codsoft</TableCell>
                      <TableCell>Machine Learning Intern</TableCell>
                      <TableCell>June 2024 - July 2024</TableCell>
                      <TableCell className="max-w-md">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Successfully completed an individual internship, developing four medium-level Python projects within a one-month deadline.</li>
                          <li>Adhered to industry standards and earned an industry-recognized certificate.</li>
                          <li>Tech stack: Python, Django, Flask</li>
                        </ul>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Board Infinity</TableCell>
                      <TableCell>Summer Intern - DSA</TableCell>
                      <TableCell>June 2024 - July 2024</TableCell>
                      <TableCell className="max-w-md">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Completed structured course on algorithm analysis, decision making techniques, and optimization strategies.</li>
                          <li>Covered: Time/space complexity, sorting, searching, recursion, dynamic programming, graph algorithms, and data structures.</li>
                          <li>Tech stack: C++, Data Structures and Algorithms</li>
                        </ul>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Incurithm</TableCell>
                      <TableCell>Junior Developer</TableCell>
                      <TableCell>November 2022 - December 2022</TableCell>
                      <TableCell className="max-w-md">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Designed and analyzed a responsive landing page for seamless cross-device experience.</li>
                          <li>Created company logo and contributed to backend development.</li>
                          <li>Tech stack: HTML, CSS, JavaScript, Bootstrap, React, Node.js, Express.js, MongoDB</li>
                        </ul>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-20">
          <h2 className="section-title">Technical Skills</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Programming Languages</h3>
                  <p className="text-gray-700">Python, Java, C++</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tools/Technologies</h3>
                  <p className="text-gray-700">Git, Hyper, JDBC, Flask, Pytorch</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Operating Systems</h3>
                  <p className="text-gray-700">Linux, Windows, Mac</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-20">
          <h2 className="section-title">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold">Career Recommendation System</h3>
                <p className="text-gray-600 mb-4">Machine Learning | July 2024</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Developed an intelligent career recommendation system using Python and machine learning algorithms to analyze user profiles and suggest optimal career paths.</li>
                  <li>Implemented various ML models including Random Forest and Decision Trees to process user data and provide personalized career suggestions.</li>
                  <li>Created an intuitive web interface for users to input their skills, interests, and academic background.</li>
                  <li>Tech stack: Python, scikit-learn, TensorFlow, Flask, HTML/CSS</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold">Shop Ecommerce Website</h3>
                <p className="text-gray-600 mb-4">Full Stack Development | November 2023</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Built a responsive e-commerce platform with user authentication, product catalog, and shopping cart functionality.</li>
                  <li>Implemented secure payment gateway integration and order management system.</li>
                  <li>Designed and developed an admin dashboard for inventory and order management.</li>
                  <li>Tech stack: React, Bootstrap, Node.js, Express.js, MongoDB</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact & Feedback Section */}
        <section id="contact" className="scroll-mt-20">
          <h2 className="section-title">Contact & Feedback</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">📧 krishnakumar@lpu.in</p>
                  <p className="text-gray-700">📱 +91 8017606078</p>
                  <p className="text-gray-700">📍 Hooghly, West Bengal 712233</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Leave Feedback</h3>
                <FeedbackForm />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
