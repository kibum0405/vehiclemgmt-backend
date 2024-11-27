package vehiclemgmt.domain;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import vehiclemgmt.domain.*;

//<<< PoEAA / Repository
@RepositoryRestResource(
    collectionResourceRel = "carAssignments",
    path = "carAssignments"
)
public interface CarAssignmentRepository
    extends PagingAndSortingRepository<CarAssignment, Long> {}
