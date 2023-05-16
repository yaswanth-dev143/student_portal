import { Brainhttp } from "./api/Brainhttp.js";
const serverUrl = "http://127.0.0.1:9000/api";
//DOM Content loaded
window.addEventListener("DOMContentLoaded", () => {
  fetchAllStudents();
});

let fetchAllStudents = () => {
  let url = `${serverUrl}/students`;
  Brainhttp.get(url)
    .then((data) => {
      let students = data;
      let Studentrow = ``;
      for (let student of students) {
        Studentrow += `<div class="student_info">
                          <section class="left_info">
                            <img
                              class="dp_info"
                              src="data:image/png;base64,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"
                            />
                            <p class="name"> ${student.Name} </p>
                          </section>
                          <section class="right_info">
                            <p>ID.NO: ${student.IdNo} </p>
                            <p>BRANCH: ${student.Branch} </p>
                            <p>GENDER: ${student.Gender} </p>
                            <p>SECTION: ${student.Section} </p>
                            <p>PH.NO: ${student.PhNo} </p>
                          </section>
                        </div>`;
      }
      document.querySelector("#info_display").innerHTML = Studentrow;
    })
    .catch((err) => {
      console.error(err);
    });
};

//ADD employee
// let addEmployeeform = document.querySelector("#form");
// addEmployeeform.addEventListener("submit", (e) => {
//   e.preventDefault(); // stops auto submition of forms
//   let employee = {
//     first_name: document.querySelector("#f_name").value,
//     last_name: document.querySelector("#l_name").value,
//     email: document.querySelector("#email").value,
//     gender: document.querySelector("#gender").value,
//     ip_address: document.querySelector("#ip_add").value,
//   };
//   console.log(employee);
//   let url = `${serverUrl}/students`;
//   Brainhttp.post(url, employee)
//     .then((data) => {
//       console.log(data);
//       fetchAllStudents();
//     })
//     .catch((err) => {
//       console.error(err);
//     });
//   clearformFields();
// });

// let tableBody = document.querySelector("#table-body");
// tableBody.addEventListener("click", (e) => {
//   let tagetEle = e.target;
//   console.log(tagetEle);

//   //click on delete button
//   if (tagetEle.classList.contains("delete")) {
//     let selectedId =
//       tagetEle.parentElement.parentElement.firstElementChild.innerHTML;
//     let url = `${serverUrl}/employees/${selectedId}`;
//     Brainhttp.delete(url)
//       .then((data) => {
//         console.log(data);
//         fetchAllStudents();
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }

//click on update button
//   if (tagetEle.classList.contains("update")) {
//     let selectedId =
//       tagetEle.parentElement.parentElement.firstElementChild.innerHTML;
//     let url = `${serverUrl}/employees`;
//     Brainhttp.get(url)
//       .then((data) => {
//         console.log(data);
//         let employees = data;
//         let selectedEmployee = employees.find((employee) => {
//           return employee.id === selectedId.trim();
//         });
//         populatetheModel(selectedEmployee);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }
// });

// let upadteEmployeeForm = document.querySelector("#update-form");
// upadteEmployeeForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let empId = document.querySelector("#up_id").value; //petina id ni calll cheyali
//   let employee = {
//     first_name: document.querySelector("#up_f_name").value,
//     last_name: document.querySelector("#up_l_name").value,
//     email: document.querySelector("#up_email").value,
//     gender: document.querySelector("#up_gender").value,
//     ip_address: document.querySelector("#up_ip_add").value,
//   };
//   let url = `${serverUrl}/employees/${empId}`;
//   Brainhttp.put(url, employee)
//     .then((data) => {
//       console.log(data);
//       fetchAllStudents();
//     })
//     .catch((err) => {
//       console.error(err);
//     });
//   clearformFields();
// });

//completed
