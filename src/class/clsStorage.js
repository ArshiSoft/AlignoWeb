//#region Local Storage Variables

export const clinicID = 'ClinicID';
export const userEmail = 'UserEmail';
export const userPhone = 'UserPhone';
export const userFirstName = 'UserFirstName';
export const userLastName = 'UserLastName';
export const userGroupID = 'UserGroupID';

//#endregion Local Storage Variables

//#region Local Storage Functions

export function SetUserInfoInLocalStorage(user) {
	localStorage.setItem(clinicID, user.Clinic);
	localStorage.setItem(userEmail, user.Email);
	localStorage.setItem(userPhone, user.PhoneNumber);
	localStorage.setItem(userFirstName, user.FirstName);
	localStorage.setItem(userLastName, user.LastName);
	localStorage.setItem(userGroupID, user.Department);
}

//#endregion Local Storage Functions
