import { useNavigate } from "react-router";

const ProjectItem = ({ id, img, title, description }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/projects/${id}`)}
      className="bg-almostWhite rounded-2xl overflow-hidden border-2 border-[#F1F1F1] group hover:border-l-8 hover:border-b-8 hover:border-r-0 hover:border-t-0 hover:border-primary hover:bg-[#F8F9FA] hover:cursor-pointer"
    >
      {img && <img src={img} className="w-full mb-4" />}
      <div className="mt-4 lg:pl-4 pl-3 xl:pr-9 lg:pr-6 pr-4 pb-9">
        <h5 className="xl:text-2xl lg:text-lg text-sm text-primary group-hover:font-bold mb-4">
          {title || "Пусто"}
        </h5>
        <p className="xl:text-lg lg:text-sm text-xs">
          {description || "Описание Пусто"}
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
