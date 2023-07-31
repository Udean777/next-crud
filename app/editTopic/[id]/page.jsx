import EditTopicForm from "@/components/EditTopicForm";

const getIdTopic = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getIdTopic(id);
  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}
