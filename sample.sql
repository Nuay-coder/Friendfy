-- sample data
INSERT INTO Admin_info (fname, lname, city, country, pincode, birth_date, email, gender) VALUES
('Alice', 'Brown', 'Bangkok', 'Thailand', 10200, '1985-03-15', 'alice.brown@example.com', 'Female'),
('Bob', 'Smith', 'Chiang Mai', 'Thailand', 50000, '1982-07-12', 'bob.smith@example.com', 'Male'),
('Carol', 'Jones', 'Pattaya', 'Thailand', 20150, '1990-10-05', 'carol.jones@example.com', 'Female'),
('David', 'Clark', 'Phuket', 'Thailand', 83000, '1988-01-23', 'david.clark@example.com', 'Male'),
('Eve', 'Walker', 'Lopburi', 'Thailand', 15000, '1992-05-30', 'eve.walker@example.com', 'Female'),
('Frank', 'Taylor', 'Khon Kaen', 'Thailand', 40000, '1980-08-18', 'frank.taylor@example.com', 'Male'),
('Grace', 'Miller', 'Udon Thani', 'Thailand', 41000, '1991-12-01', 'grace.miller@example.com', 'Female'),
('Hank', 'Wilson', 'Nakhon Ratchasima', 'Thailand', 30000, '1984-09-09', 'hank.wilson@example.com', 'Male'),
('Ivy', 'Moore', 'Ayutthaya', 'Thailand', 13000, '1987-11-20', 'ivy.moore@example.com', 'Female'),
('Jack', 'Taylor', 'Rayong', 'Thailand', 21000, '1983-02-17', 'jack.taylor@example.com', 'Male');

INSERT INTO Admin_login (username, password, role, login_time, admin_id) VALUES
('alice_b', 'pass123', 'System Admin', '08:45:00', 1),
('bob_s', 'bobpass', 'User Admin', '09:00:00', 2),
('carol_j', 'cj789', 'Moderator', '10:10:00', 3),
('david_c', 'dpass456', 'Content Admin', '11:00:00', 4),
('eve_w', 'evepw321', 'Admin Assistant', '08:30:00', 5),
('frank_t', 'ftpass', 'System Admin', '13:15:00', 6),
('grace_m', 'gmsecure', 'User Admin', '14:00:00', 7),
('hank_w', 'hw1234', 'Moderator', '15:30:00', 8),
('ivy_m', 'impass', 'Content Admin', '16:10:00', 9),
('jack_t', 'jtpass', 'Admin Assistant', '17:00:00', 10);

INSERT INTO User (display_name, password, fname, lname, birth_date, email, gender, phone_number, u_location) VALUES
('kanun', 'pass1', 'Nonthachai', 'Kratutngoen', '2004-09-09', 'kanun@example.com', 'Male', '0890000001', 'Bangkok'),
('som99', 'abc123', 'Nonthiya', 'Kratutngoen', '1999-01-23', 'som@example.com', 'Female', '0890000002', 'Bangkok'),
('justinb', 'baby2024', 'Justin', 'Bieber', '1994-03-01', 'jb@example.com', 'Male', '0890000003', 'Canada'),
('lisa_b', 'lalalisa', 'Lalisa', 'Manoban', '1997-03-27', 'lisa@example.com', 'Female', '0890000004', 'Buriram'),
('jenny_k', 'solo123', 'Jennie', 'Kim', '1996-01-16', 'jennie@example.com', 'Female', '0890000005', 'Seoul'),
('rm_k', 'leader1', 'Namjoon', 'Kim', '1994-09-12', 'rm@example.com', 'Male', '0890000006', 'Seoul'),
('james01', 'jamie2024', 'James', 'Taylor', '2000-06-15', 'jtaylor@example.com', 'Male', '0890000007', 'London'),
('sara.s', 'ssara23', 'Sara', 'Smith', '1998-02-20', 'sara@example.com', 'Female', '0890000008', 'Chiang Mai'),
('min_y', 'minpass', 'Min', 'Young', '1995-04-30', 'miny@example.com', 'Female', '0890000009', 'Seoul'),
('elena.g', 'elenagirl', 'Elena', 'Gomez', '1993-07-11', 'elena@example.com', 'Female', '0890000010', 'Mexico');

INSERT INTO Events (event_id, e_name, e_date, e_location, e_status, participant, e_category) VALUES
(1, 'Coding Camp', '2025-05-01', 'Bangkok', 'Avaliable', 25, 'Education'),
(2, 'Music Fest', '2025-06-10', 'Chiang Mai', 'Full', 100, 'Entertainment'),
(3, 'Startup Talk', '2025-04-15', 'Bangkok', 'Avaliable', 40, 'Business'),
(4, 'Hackathon', '2025-07-01', 'Online', 'Avaliable', 50, 'Technology'),
(5, 'Art Fair', '2025-08-20', 'Lopburi', 'Canceled', 0, 'Arts'),
(6, 'Cooking Class', '2025-04-25', 'Pattaya', 'Avaliable', 20, 'Food'),
(7, 'Travel Expo', '2025-09-05', 'Bangkok', 'Avaliable', 75, 'Tourism'),
(8, 'Fashion Week', '2025-10-15', 'Bangkok', 'Full', 200, 'Fashion'),
(9, 'K-Pop Night', '2025-04-28', 'Seoul', 'Avaliable', 300, 'Entertainment'),
(10, 'AI Summit', '2025-06-01', 'Singapore', 'Avaliable', 150, 'Technology');

INSERT INTO Reservation (r_name, r_date, start_time, end_time, r_status, r_category, user_id) VALUES
('CodeLab', '2025-04-09', '09:00:00', '12:00:00', 'Confirmed', 'Workshop', 1),
('MusicEntry', '2025-04-10', '13:00:00', '16:00:00', 'Pending', 'Concert', 2),
('StartupReg', '2025-04-11', '10:00:00', '13:00:00', 'Confirmed', 'Seminar', 3),
('HackReg', '2025-04-12', '14:00:00', '18:00:00', 'Completed', 'Competition', 4),
('ArtVisit', '2025-04-13', '09:00:00', '11:00:00', 'Canceled', 'Exhibition', 5),
('CookSlot', '2025-04-14', '10:00:00', '12:00:00', 'Pending', 'Class', 6),
('TravelShow', '2025-04-15', '13:00:00', '15:00:00', 'Confirmed', 'Expo', 7),
('FashionDay', '2025-04-16', '14:00:00', '17:00:00', 'Confirmed', 'Show', 8),
('KPopZone', '2025-04-17', '18:00:00', '21:00:00', 'Confirmed', 'Concert', 9),
('AISlot', '2025-04-18', '09:00:00', '12:00:00', 'Pending', 'Conference', 10);

INSERT INTO Complaints (complain_id, c_date, c_category, user_id) VALUES
(1, '2025-04-01', 'Event Delay', 1),
(2, '2025-04-02', 'Login Issue', 2),
(3, '2025-04-03', 'Payment Error', 3),
(4, '2025-04-04', 'No Confirmation Email', 4),
(5, '2025-04-05', 'Event Cancelled', 5),
(6, '2025-04-06', 'Wrong Info', 6),
(7, '2025-04-07', 'Booking Failed', 7),
(8, '2025-04-08', 'Late Start', 8),
(9, '2025-04-09', 'Overbooked Event', 9),
(10, '2025-04-10', 'Audio Issues', 10);
