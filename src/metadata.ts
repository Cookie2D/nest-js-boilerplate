/* eslint-disable */
export default async () => {
    const t = {
        ["./modules/example/entities/example.entity"]: await import("./modules/example/entities/example.entity")
    };
    return { "@nestjs/swagger": { "models": [[import("./core/db/entities/base.entity"), { "BaseEntity": { id: { required: true, type: () => Number }, createdAt: { required: true, type: () => String }, updatedAt: { required: true, type: () => String } } }], [import("./modules/example/entities/example.entity"), { "ExampleEntity": { content: { required: true, type: () => String } } }]], "controllers": [[import("./modules/example/example.controller"), { "ExampleController": { "getAllExamples": { type: [t["./modules/example/entities/example.entity"].ExampleEntity] } } }]] } };
};