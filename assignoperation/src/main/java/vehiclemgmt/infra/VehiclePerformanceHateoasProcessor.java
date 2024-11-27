package vehiclemgmt.infra;

import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.stereotype.Component;
import vehiclemgmt.domain.*;

@Component
public class VehiclePerformanceHateoasProcessor
    implements RepresentationModelProcessor<EntityModel<VehiclePerformance>> {

    @Override
    public EntityModel<VehiclePerformance> process(
        EntityModel<VehiclePerformance> model
    ) {
        model.add(
            Link
                .of(
                    model.getRequiredLink("self").getHref() +
                    "/registerdrivinglog"
                )
                .withRel("registerdrivinglog")
        );

        return model;
    }
}
