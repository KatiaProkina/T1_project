import team_member_1 from '../../../public/img/team_member_1.png';
import team_member_2 from '../../../public/img/team_member_2.png';
import team_member_3 from '../../../public/img/team_member_3.png';
import team_member_4 from '../../../public/img/team_member_4.png';
import team_member_5 from '../../../public/img/team_member_5.png';
import team_member_6 from '../../../public/img/team_member_6.png';
import element from '../../../public/img/team-page-element.png';
const Team = () => {
  return (
    <div className="team-container">
      <h3 className="team-container-title">Our team</h3>
      <div class="team-members">
        <div class="team-column">
          <img
            src={team_member_1}
            alt="photo-team-member"
            class="team-member-photo"
          />
          <img
            src={team_member_4}
            alt="photo-team-member"
            class="team-member-photo"
          />
        </div>
        <div class="team-column">
          <img
            src={team_member_2}
            alt="photo-team-member"
            class="team-member-photo"
          />
          <img
            src={team_member_5}
            alt="photo-team-member"
            class="team-member-photo"
          />
        </div>
        <div class="team-column">
          <img
            src={team_member_3}
            alt="photo-team-member"
            class="team-member-photo"
          />
          <img
            src={team_member_6}
            alt="photo-team-member"
            class="team-member-photo"
          />
        </div>
      </div>
    </div>
  );
};
export default Team;
